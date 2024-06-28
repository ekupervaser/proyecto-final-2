import {db} from './firebase.js';
import {addDoc, collection, onSnapshot, query, doc, deleteDoc} from "firebase/firestore";

const refCursos = collection(db, 'cursos');

/**
 * Función para crear un nuevo curso
 * 
 * @param {Object} data 
 * @returns {Promise<DocumentReference>}
 */
export function SaveNewCourse(data) {

    return addDoc(refCursos, {
        ...data,
    });
}

/**
 * Función para obtener los cursos
 * 
 * @param {() => {}} callback 
 * @returns {import('firebase/auth').Unsubscribe}
 */
export function getCourses(callback) {

    const q = query(refCursos);

    return onSnapshot(q, snapshot => {
        const data = snapshot.docs.map(doc => {
            return {
                id: doc.id,
                name: doc.data().name,
                description: doc.data().description,
                price: doc.data().price,
            };
        });

        callback(data);
    });
}

/**
 * Función para eliminar un curso
 * 
 * @param {courseId: string} data 
 */

export async function deleteCourse(courseId) {
    const courseRef = doc(db, "cursos", courseId); 
    try {
      await deleteDoc(courseRef);
    } catch (error) {
    }
  }
  
