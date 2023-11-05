import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCAOCgtUJnoxxg9R-MPHBkdeWDBVVsQgu4",
  authDomain: "chat-e842d.firebaseapp.com",
  projectId: "chat-e842d",
  storageBucket: "chat-e842d.appspot.com",
  messagingSenderId: "874665094430",
  appId: "1:874665094430:web:7a773aaf36b60d6c9cad0f",
  measurementId: "G-WEWKRBMSPQ",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
