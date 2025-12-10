import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, EmailAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const apiKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY;

const firebaseConfig = {
  apiKey: apiKey,
  authDomain: "sv-engenharia.firebaseapp.com",
  projectId: "sv-engenharia",
  storageBucket: "sv-engenharia.firebasestorage.app",
  messagingSenderId: "873260886596",
  appId: "1:873260886596:web:f53f5962812325ab14aa11",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const emailProvider = new EmailAuthProvider();
export const storage = getStorage(app);
