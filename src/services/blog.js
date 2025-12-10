import { db } from "../../firebase-config";
import {
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

const tabela = "artigos";
const referencia = collection(db, tabela);

export const ReadAll = () =>
  new Promise(async (resolve, reject) => {
    try {
      const data = await getDocs(referencia);

      const { docs } = data;

      const retorno = docs
        .map(doc => ({ ...doc.data(), id: doc.id }))
        .sort((a, b) => {
          if (a.dataDoArtigo > b.dataDoArtigo) {
            return -1;
          } else if (a.dataDoArtigo < b.dataDoArtigo) {
            return 1;
          }

          return 0;
        });

      resolve(retorno);
    } catch (e) {
      console.error(e);
      reject(e);
    }
  });

export const Read = (id = "") =>
  new Promise(async (resolve, reject) => {
    try {
      const documento = doc(db, tabela, id);
      const snapshot = await getDoc(documento);

      resolve({ id, ...snapshot.data() });
    } catch (e) {
      reject(e);
    }
  });

export const Create = (params = {}) =>
  new Promise(async (resolve, reject) => {
    try {
      const outrasImagens = params.outrasImagens.map(i => i.nome);

      const artigo = { ...params, outrasImagens };

      const documento = await addDoc(referencia, artigo);

      resolve(documento.id);
    } catch (e) {
      reject(e);
    }
  });

export const Update = (id = "", params = {}) =>
  new Promise(async (resolve, reject) => {
    try {
      const documento = doc(db, tabela, id);
      const outrasImagens = params.outrasImagens.map(i => i.nome);

      const dadosAtualizados = {
        id,
        ...params,
        outrasImagens,
      };

      await updateDoc(documento, dadosAtualizados);

      resolve();
    } catch (e) {
      reject(e);
    }
  });

export const Delete = (id = "") =>
  new Promise(async (resolve, reject) => {
    try {
      const documento = doc(db, tabela, id);

      await deleteDoc(documento);

      resolve();
    } catch (e) {
      reject(e);
    }
  });
