import { auth } from "./firebase.js";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { getUserProfileById, createUserProfile, updateUserProfile } from './user.js';
import { getFileURL, uploadFile } from "./file-storage.js";
import { getCourseById } from "./shine-services.js";

let userData = {
  id: null,
  email: null,
  role: null,
  displayName: null,
  photoURL: null,
  coursesPurchased: [],
}

let observers = [];

if (localStorage.getItem('user')) {
  userData = JSON.parse(localStorage.getItem('user'));
}

onAuthStateChanged(auth, async user => {
  if (user) {
    setUserData({
      id: user.uid,
      email: user.email,
      displayName: user.displayName,
      role: user.role,
      photoURL: user.photoURL,
      coursesPurchased: user.coursesPurchased,
    });

    const fullData = await getUserProfileById(user.uid);
    setUserData({
      role: fullData.role,
    })
  } else {
    clearUserData();
    localStorage.removeItem('user');
  }
})

/**
 * Función para registrarse
 * 
 * @param {{email: string, password: string, role: string}} user
 * @return {Promise}
 */
export async function register({email, password, role}) {
  try {
    const userCredentials = await createUserWithEmailAndPassword(auth, email, password);

     // Función para crear el usuario en Firestore
    await createUserProfile(userCredentials.user.uid, {email});

    return {
      id: userCredentials.user.uid,
      email: userCredentials.user.email,
      role: 'user',
    }
  } catch (error) {
    // Manejo del error
    return {
      code: error.code,
      message: error.message,
    }
  }
}

/**
 * Función para iniciar sesión
 * 
 * @param {{email: string, password: string}} user 
 * @return {Promise}
 */
export function login({email, password}) {
    return signInWithEmailAndPassword(auth, email, password)
        .then(userCredentials => {
          userData = {
            id: userCredentials.user.uid,
            email: userCredentials.user.email,
            displayName: userCredentials.user.displayName,
            role: userCredentials.role,
            photoURL: userCredentials.user.photoURL,
            coursesPurchased: userCredentials.user.coursesPurchased,
        };
          return userData;
        })
        .catch(error => {
          throw {
            code: error.code,
            message: error.message,
          };
      });
}

/**
 * Función para salir de la sesión
 * 
 * @returns {Promise}
 */
export function logout () {

  return signOut(auth);
}

/**
 * Función para editar el perfil
 * 
 * @param {displayName: string|null, photoURL: string|null} data 
 * @returns {Promise}
 */
export async function editProfile({displayName, photoURL}) {
  try {

    const data = {};

    if(displayName !== undefined) {
      data.displayName = displayName;
    } else if (photoURL !== undefined) {
      data.photoURL = photoURL
    };
    
    const promiseAuth = updateProfile(auth.currentUser, data);

    const promiseProfile = updateUserProfile(userData.id, data);

    await Promise.all([promiseAuth, promiseProfile]);

    setUserData(data);
    
  } catch (error) {
    // TO DO
    throw error;
  }
}

/**
 * Función para subir la foto de un usuario a Firestore
 * 
 * @param {File} file
 * @returns {Promise} 
 */
export async function editProfilePhoto(file) {
  const path = `users/${userData.id}/photo`;
  await uploadFile(path, file);

  const photoURL = await getFileURL(path);

  return editProfile({
    photoURL,
  });
}

/**
 * Función para cancelar la suscripción
 * 
 * @param {({id: null|string, email: null|string, role: null|string, displayName: null|string}) => void} observer 
 * @returns {() => void} 
 */
export function subscribeToAuth(observer) {
  observers.push(observer);

  notify(observer);

  auth.onAuthStateChanged(async (user) => {
    if (user) {
      // Usuario autenticado

      try {

        const userProfile = await getUserProfileById(user.uid);
        observer(userProfile);

        if (userProfile && userProfile.coursesPurchased) {
          const coursesPurchased = await Promise.all(userProfile.coursesPurchased.map(courseId => getCourseById(courseId)));
          observer({ ...userProfile, coursesPurchased });
        }

      } catch (error) {

      }
       

    } else {
        // Usuario no autenticado
        clearUserData();
        observer(null);
    }
});

  return () => {
    observers = observers.filter(obs => obs !== observer);
  }
}

function notify(observer) {
  observer({...userData});
}

function notifyAll () {
  observers.forEach(observer => notify(observer));
}

/**
 * 
 * @param {{id: null|string, email: null|string, role: null|string, displayName: null|string}} newData 
 */
function setUserData (newData) {
  userData = {
    ...userData,
    ...newData,
  }

  localStorage.setItem('user', JSON.stringify(userData));
  notifyAll();
}

function clearUserData () {
  setUserData({
    id: null,
    email: null,
    role: null,
    displayName: null,
    photoURL: null,
    coursesPurchased: [],

});
localStorage.removeItem('user');
}

export function getUserData () {
  return {...userData};
}

/**
 * Función para verificar si el usuario está autenticado.
 * @returns {boolean}
 */
export function isAuthenticated() {
  const user = auth.currentUser;
  return !!user;
}