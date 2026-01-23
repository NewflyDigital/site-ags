import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, EmailAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const apiKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY;

const firebaseConfig = {
  apiKey: apiKey,
  projectId: "ags-engenharia",
  authDomain: "ags-engenharia.firebaseapp.com",
  projectId: "ags-engenharia",
  storageBucket: "ags-engenharia.firebasestorage.app",
  messagingSenderId: "493901760696",
  appId: "1:493901760696:web:7b9f2554fc45fef3da8c4d"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const emailProvider = new EmailAuthProvider();
export const storage = getStorage(app);
