// Import the functions you need from the SDKs you need
import "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZ1FC0ukjk7pEU6taW2PmilzxkJkWcBcA",
  authDomain: "bike-roubada.firebaseapp.com",
  projectId: "bike-roubada",
  storageBucket: "bike-roubada.appspot.com",
  messagingSenderId: "1060066755769",
  appId: "1:1060066755769:web:e306895777ba06de118768"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

export const db = getFirestore(app)