// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection } from "firebase/firestore";
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import ReactObserver from 'react-event-observer';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9Nha9WS12eZwKl0D05-BjlfkEFiCKPUQ",
  authDomain: "where-s-waldo-9.firebaseapp.com",
  projectId: "where-s-waldo-9",
  storageBucket: "where-s-waldo-9.appspot.com",
  messagingSenderId: "385456596542",
  appId: "1:385456596542:web:7641ce52c476d9a036136f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

const colRef = collection(db, 'levels');

export { getDocs, colRef };

let token, user, credential;
export const signInUser = async () => {
  const provider = new GoogleAuthProvider();
  await signInWithPopup(getAuth(), provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      credential = GoogleAuthProvider.credentialFromResult(result);
      token = credential.accessToken;
      // The signed-in user info.
      user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
}

const auth = getAuth();
export const firebaseObserver = ReactObserver();
auth.onAuthStateChanged(function(user) {
  firebaseObserver.publish("authStateChanged", auth.currentUser);
});

export const signOutUser = () => {
  signOut(getAuth());
}

export { user };