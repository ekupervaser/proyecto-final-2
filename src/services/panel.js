import {db} from './firebase.js';
import {addDoc, collection, onSnapshot, query, doc, deleteDoc} from "firebase/firestore";

const refPlans = collection(db, 'plans');

/**
 * Función para crear un nuevo curso
 * 
 * @param {Object} data 
 * @returns {Promise<DocumentReference>}
 */
export function SaveNewPlan(data) {

    return addDoc(refPlans, {
        ...data,
    });
}

/**
 * Función para obtener los cursos
 * 
 * @param {() => {}} callback 
 * @returns {import('firebase/auth').Unsubscribe}
 */
export function getPlans(callback) {

    const q = query(refPlans);

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
 * @param {planId: string} data 
 */

export async function deletePlan(planId) {
    const planRef = doc(db, "plans", planId); 
    try {
      await deleteDoc(planRef);
    } catch (error) {
    }
  }
  
