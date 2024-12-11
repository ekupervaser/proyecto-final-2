  import {db} from './firebase.js';
  import {doc, getDoc, updateDoc, arrayUnion, collection, onSnapshot, query} from "firebase/firestore";

  const refPlans = collection(db, 'plans');

  /**
   * Función para obtener el listado de planes
   * 
   * @param {() => {}} callback 
   * @returns {import('firebase/auth').Unsubscribe}
   */
  export function importPlans(callback) {

      const q = query(refPlans);

      return onSnapshot(q, snapshot => {
          const data = snapshot.docs.map(doc => {
              return {
                  id: doc.id,
                  name: doc.data().name,
                  description: doc.data().description,
                  price: doc.data().price.toLocaleString("es"),
                  benefits: doc.data().benefits,
              };
          });

          callback(data);
      });
  }

  /**
   * Función para obtener un plan por su ID
   * 
   * @param {string} planId 
   * @returns {Promise<{ id: string, name: string, description: string, price: string } | null>}
   */
  export async function getPlanById(planId) {

      const planRef = doc(db, 'plans', planId);

      const planSnapshot = await getDoc(planRef);
    
      if (planSnapshot.exists()) {

        return {
          id: planSnapshot.id,
          name: planSnapshot.data().name,
          description: planSnapshot.data().description,
          price: planSnapshot.data().price
        };
      } else {
        return null;
      }
    }

    //Función para comprar un plan y guardarlo en el usuario en Firestore
    export async function purchasePlanFirestore(userId, planId) {
      const userRef = doc(db, `users/${userId}`);
      const plan = await getPlanById(planId);
      const fechaActual = new Date();
    
      await updateDoc(userRef, {
        plansPurchased: arrayUnion({
          planId,
          name: plan.name,
          description: plan.description,
          price: plan.price,
          purchaseDate: fechaActual,
        }),
      });
    }


/**
 * Función para obtener los planes comprados por un usuario
 * 
 * @param {string} userId
 * @returns {Promise<Array>} 
 */
export async function getPlansPurchasedByUser(userId) {
  try {
    const userRef = doc(db, `users/${userId}`);
    const userSnapshot = await getDoc(userRef);

    if (userSnapshot.exists()) {
      const userData = userSnapshot.data();
      const plansPurchased = userData.plansPurchased || [];
    
      return plansPurchased;
    } else {
      return [];
    }
  } catch (error) {
    throw error;
  }
}

/**
 * Función para eliminar un plan de los planes comprados por el usuario
 * 
 * @param {string} userId
 * @param {string} planId 
 * @returns {Promise<void>}
 */
export async function deletePlanFromUser(userId, planId) {
  try {
    const userRef = doc(db, 'users', userId);

    const userDoc = await getDoc(userRef);
    if (!userDoc.exists()) {
      throw new Error(`Usuario con ID ${userId} no encontrado.`);
    }

    const userData = userDoc.data();
    const plansPurchased = userData.plansPurchased || [];

    const updatedPlans = plansPurchased.filter(plan => plan.planId !== planId);

    await updateDoc(userRef, { plansPurchased: updatedPlans });

    console.log(`Plan con ID ${planId} eliminado exitosamente del usuario ${userId}.`);
  } catch (error) {
    console.error(`Error al eliminar el plan con ID ${planId}:`, error);
    throw error;
  }
}