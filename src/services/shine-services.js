  import {db} from './firebase.js';
  import {doc, getDoc, updateDoc, arrayUnion, collection, onSnapshot, query} from "firebase/firestore";

  const refCursos = collection(db, 'cursos');

  /**
   * Función para obtener el listado de cursos
   * 
   * @param {() => {}} callback 
   * @returns {import('firebase/auth').Unsubscribe}
   */
  export function importCursos(callback) {

      const q = query(refCursos);

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
   * Función para obtener un curso por su ID
   * 
   * @param {string} courseId 
   * @returns {Promise<{ id: string, name: string, description: string, price: string } | null>}
   */
  export async function getCourseById(courseId) {

      const cursoRef = doc(db, 'cursos', courseId);

      const cursoSnapshot = await getDoc(cursoRef);
    
      if (cursoSnapshot.exists()) {

        return {
          id: cursoSnapshot.id,
          name: cursoSnapshot.data().name,
          description: cursoSnapshot.data().description,
          price: cursoSnapshot.data().price
        };
      } else {
        return null;
      }
    }

    //Función para comprar un curso y guardarlo en el usuario en Firestore
    export async function purchaseCourseFirestore(userId, courseId) {
      const userRef = doc(db, `users/${userId}`);
      const course = await getCourseById(courseId);
      const fechaActual = new Date();
    
      await updateDoc(userRef, {
        coursesPurchased: arrayUnion({
          courseId,
          name: course.name,
          description: course.description,
          price: course.price,
          purchaseDate: fechaActual,
        }),
      });
    }


/**
 * Función para obtener los cursos comprados por un usuario
 * 
 * @param {string} userId
 * @returns {Promise<Array>} 
 */
export async function getCoursesPurchasedByUser(userId) {
  try {
    const userRef = doc(db, `users/${userId}`);
    const userSnapshot = await getDoc(userRef);

    if (userSnapshot.exists()) {
      const userData = userSnapshot.data();
      const coursesPurchased = userData.coursesPurchased || [];
    
      return coursesPurchased;
    } else {
      return [];
    }
  } catch (error) {
    throw error;
  }
}