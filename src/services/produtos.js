import { db } from "/firebase-config";
import {
  collection,
  getDocs,
  getDoc,
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

const ref = collection(db, "produtos");

export const ReadAll = async () => {
  const snap = await getDocs(ref);
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
};

export const Read = async (id) => {
  const docRef = doc(db, "produtos", id);
  const snap = await getDoc(docRef);
  return snap.data();
};

export const Create = async (data) => {
  const docRef = await addDoc(ref, data);
  return docRef.id;
};

export const Update = async (id, data) => {
  await updateDoc(doc(db, "produtos", id), data);
};

export const Delete = async (id) => {
  await deleteDoc(doc(db, "produtos", id));
};
