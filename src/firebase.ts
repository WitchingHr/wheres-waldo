// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection } from "firebase/firestore";
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import pubsub from "./pubsub";

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
const leaderRef = collection(db, 'leaderboard');

export { getDocs, colRef, leaderRef, db };

export const signInUser = async () => {
  const provider = new GoogleAuthProvider();
  await signInWithPopup(getAuth(), provider)
}

const auth = getAuth();
auth.onAuthStateChanged(function(user) {
  pubsub.publish("authStateChanged", auth.currentUser);
});

export const signOutUser = () => {
  signOut(getAuth());
}
