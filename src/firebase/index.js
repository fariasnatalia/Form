// Import the functions you need from the SDKs you need
import "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAk1idNhLzvK5KD4FOpDdwoZgbvDCyZAFc",
  authDomain: "bike-roubada-9cfbc.firebaseapp.com",
  projectId: "bike-roubada-9cfbc",
  storageBucket: "bike-roubada-9cfbc.appspot.com",
  messagingSenderId: "52698129265",
  appId: "1:52698129265:web:ecbad512c9503cce4e4cd0",
  measurementId: "G-KE36YW8PX8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

export const db = getFirestore(app)