// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLMHE2MMPfKPZELUGtvP7x9DAWkd5a4Bg",
  authDomain: "react-firebase-blog-practice.firebaseapp.com",
  projectId: "react-firebase-blog-practice",
  storageBucket: "react-firebase-blog-practice.appspot.com",
  messagingSenderId: "317607679841",
  appId: "1:317607679841:web:8178f3a9f90ffc27db9720",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();
