// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3LB0p7NPPZobMJtlrvl6TcZ_r86JU_yg",
  authDomain: "final-react-project-b3c67.firebaseapp.com",
  projectId: "final-react-project-b3c67",
  storageBucket: "final-react-project-b3c67.appspot.com",
  messagingSenderId: "688217435000",
  appId: "1:688217435000:web:4d020da3427a53caecb68d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
