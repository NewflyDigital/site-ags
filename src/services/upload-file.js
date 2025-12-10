import Resizer from "react-image-file-resizer";
import { db, storage } from "../../firebase-config";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} from "@firebase/storage";

export const UploadImage = ({ file = null, path = "", fileName = "" }) =>
  new Promise(resolve => {
    if (!file) resolve(null);

    ResizeFile(file).then(resized => {
      const storageRef = ref(storage, `/images/${path}/${fileName}`);
      const uploadTask = uploadBytesResumable(storageRef, resized);

      uploadTask
        .then(snapShot => {
          getDownloadURL(snapShot.ref)
            .then(url => {
              resolve({
                url: url,
                name: snapShot.metadata.name,
                fullPath: snapShot.metadata.fullPath,
                contentType: snapShot.metadata.contentType,
                size: snapShot.metadata.size,
              });
            })
            .catch(err => {
              resolve(null);
            });
        })
        .catch(err => {
          resolve(null);
        });
    });
  });

export const DeleteImage = ({ path = "", fileName = "" }) =>
  new Promise(resolve => {
    const storageRef = ref(storage, `/images/${path}/${fileName}`);

    deleteObject(storageRef)
      .then(() => {
        resolve({ status: 200, message: "" });
      })
      .catch(error => {
        resolve({ status: 400, message: error.message });
      });
  });

export const UploadFile = ({ file = null, path = "", fileName = "" }) =>
  new Promise(async (resolve, reject) => {
    if (!file) throw Error("Imagem sem conteúdo");

    const resizedFile = await ResizeFile(file);
    const storageRef = ref(storage, `/docs/${path}/${fileName}`);
    const uploadTask = uploadBytesResumable(storageRef, resizedFile);

    uploadTask
      .then(snapShot => {
        getDownloadURL(snapShot.ref)
          .then(url => {
            resolve({
              url: url,
              name: snapShot.metadata.name,
              fullPath: snapShot.metadata.fullPath,
              contentType: snapShot.metadata.contentType,
              size: snapShot.metadata.size,
            });
          })
          .catch(err => {
            reject(err);
          });
      })
      .catch(err => {
        reject(err);
      });
  });

export const DeleteFile = ({ path = "" }) =>
  new Promise(resolve => {
    const storageRef = ref(storage, `${path}`);

    deleteObject(storageRef)
      .then(() => {
        resolve({ status: 200, message: "" });
      })
      .catch(error => {
        resolve({ status: 400, message: error.message });
      });
  });

export const ResizeFile = file => {
  return new Promise(resolve => {
    try {
      Resizer.imageFileResizer(
        file,
        800,
        800,
        "PNG",
        100,
        0,
        uri => {
          urltoFile(uri, "newfile.png", "image/png").then(newFile => {
            resolve(newFile);
          });
        },
        "base64"
      );
    } catch (error) {
      resolve(undefined);
    }
  });
};

function urltoFile(url, filename, mimeType) {
  return fetch(url)
    .then(function (res) {
      return res.arrayBuffer();
    })
    .then(function (buf) {
      return new File([buf], filename, { type: mimeType });
    });
}

export const GetImageUrl = async (path, filename) => {
  try {
    const referencia = ref(storage, `/images/${path}/${filename}`);

    const retorno = await getDownloadURL(referencia);

    return retorno;
  } catch (e) {
    throw e;
  }
};

export function toDataUrl(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.onload = function () {
    var reader = new FileReader();
    reader.onloadend = function () {
      callback(reader.result);
    };
    reader.readAsDataURL(xhr.response);
  };
  xhr.open("GET", url);
  xhr.responseType = "blob";
  xhr.send();
}
