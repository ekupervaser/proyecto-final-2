import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "./firebase";

/**
 * Sube el archivo a Firestore
 * 
 * @param {string} path 
 * @param {File} file
 * @returns {Promise} 
 */
export async function uploadFile(path, file) {
    const fileRef = ref(storage, path);
    return uploadBytes(fileRef, file);
}

/**
 * Retorna la URL del archivo en Firestore
 * 
 * @param {File} path 
 * @returns {Promise<string>}
 */
export async function getFileURL(path) {
    return getDownloadURL(ref(storage, path));
}