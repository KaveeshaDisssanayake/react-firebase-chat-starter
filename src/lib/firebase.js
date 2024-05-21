
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-2370f.firebaseapp.com",
  projectId: "reactchat-2370f",
  storageBucket: "reactchat-2370f.appspot.com",
  messagingSenderId: "311059187152",
  appId: "1:311059187152:web:2c070a59e81e33f9a225d5"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()