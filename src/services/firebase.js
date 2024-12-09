// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFunctions, httpsCallable } from 'firebase/functions';

const firebaseConfig = {
  apiKey: "AIzaSyAaVNd1uq2sYX1_OK1JAxGZh_AXXhO2Dhc",
  authDomain: "proyecto-final-55c6c.firebaseapp.com",
  projectId: "proyecto-final-55c6c",
  storageBucket: "proyecto-final-55c6c.appspot.com",
  messagingSenderId: "290805803150",
  appId: "1:290805803150:web:3dc4745eac67839b0b01df"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
const functions = getFunctions(app);
export { functions, httpsCallable };