// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC972CTa_OKW6nFb0JsadJ55uR21yvzGbI",
  authDomain: "fir-auth-6def9.firebaseapp.com",
  projectId: "fir-auth-6def9",
  storageBucket: "fir-auth-6def9.appspot.com",
  messagingSenderId: "968221306711",
  appId: "1:968221306711:web:1b905a6d9194402f6f9812",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
