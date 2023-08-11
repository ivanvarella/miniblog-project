// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBULhYXpDW-Izd49mYqL-BbcvW0NpZUepE",
  authDomain: "miniblog-d8296.firebaseapp.com",
  projectId: "miniblog-d8296",
  storageBucket: "miniblog-d8296.appspot.com",
  messagingSenderId: "447813377534",
  appId: "1:447813377534:web:637e1e13e01b7d79ae74af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


//Inicialize Firestore DB
const db = getFirestore(app);

export { db };