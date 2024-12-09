import { db } from './firebase.js';
import { getDoc, addDoc, collection, onSnapshot, query, doc, deleteDoc, updateDoc } from "firebase/firestore";

const refPlans = collection(db, 'plans');

/**
 * Función para crear un nuevo plan
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
 * Función para obtener los planes
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
 * Función para obtener un plan por ID
 * 
 * @param {() => {}} callback 
 * @returns {import('firebase/auth').Unsubscribe}
 */
export function getPlanById(planId) {
    const planRef = doc(db, 'plans', planId); // 'plans' es el nombre de tu colección
    return getDoc(planRef)
        .then((docSnap) => {
            if (docSnap.exists()) {
                return docSnap.data(); // Retorna los datos del plan
            } else {
                throw new Error('El documento no existe');
            }
        })
        .catch((error) => {
            console.error('Error al obtener el plan:', error);
            throw error; // Lanza el error para que lo maneje el componente
        });
}

/**
 * Función para eliminar un plan
 * 
 * @param {string} planId 
 * @returns {Promise<void>}
 */
export async function deletePlan(planId) {
    const planRef = doc(db, "plans", planId); 
    try {
        await deleteDoc(planRef);
    } catch (error) {
        console.error("Error eliminando el plan:", error);
    }
}


/**
 * Función para editar un plan
 * 
 * @param {string} planId 
 * @param {Object} updatedData 
 * @returns {Promise<void>}
 */
export async function editPlan(planId, updatedData) {
    const planRef = doc(db, "plans", planId); 
    try {
        // Verifica si 'benefits' es un array antes de enviarlo a Firestore
        if (Array.isArray(updatedData.benefits)) {
            await updateDoc(planRef, {
                ...updatedData,  // Los beneficios se deben enviar tal cual están en el array
            });
        } else {
            throw new Error('El campo "benefits" debe ser un array');
        }
    } catch (error) {
        console.error("Error actualizando el plan:", error);
        throw error;
    }
}

/**
 * Función para guardar un plan editado
 * 
 * @param {string} planId 
 * @param {Object} updatedData 
 * @returns {Promise<void>}
 */
export function SaveEditedPlan(planId, updatedData) {
    return editPlan(planId, updatedData);
}
