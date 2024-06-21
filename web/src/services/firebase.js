// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCu_bQNIQOxHcslJBFBg6M5UPxrcF4jwlw",
  authDomain: "clienteswebtp1.firebaseapp.com",
  projectId: "clienteswebtp1",
  storageBucket: "clienteswebtp1.appspot.com",
  messagingSenderId: "78825190717",
  appId: "1:78825190717:web:3b8f57ba56cd0614ec0154",
  measurementId: "G-1JE28JL448"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);