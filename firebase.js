// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGwes3Dr6sfzqJlFObl_m8KpUaC7W3D6g",
  authDomain: "inventory-management-39bbb.firebaseapp.com",
  projectId: "inventory-management-39bbb",
  storageBucket: "inventory-management-39bbb.appspot.com",
  messagingSenderId: "53502901768",
  appId: "1:53502901768:web:12a01c4e8a9ae7884edbbd",
  measurementId: "G-MG4RX3K4YL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export {firestore};
