// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
/*const FirebaseConfig = {
  apiKey: "AIzaSyBEL0OIEqmN9RpWoo4z3KfaQu4bx5BilDw",
  authDomain: "bigtimes-d5c4d.firebaseapp.com",
  projectId: "bigtimes-d5c4d",
  storageBucket: "bigtimes-d5c4d.appspot.com",
  messagingSenderId: "1298803549",
  appId: "1:1298803549:web:677054b507db709c8b96b4",
  measurementId: "G-7QJ4EYWPFP"
};*/

const FirebaseConfig = {
  apiKey: "AIzaSyArpYOsyNUFu7Lq2Gqp1iBiBHDQ0dlpQw4",
  authDomain: "bigtimesapp.firebaseapp.com",
  projectId: "bigtimesapp",
  storageBucket: "bigtimesapp.appspot.com",
  messagingSenderId: "672844963112",
  appId: "1:672844963112:web:710759813fa6cf55c7441d",
  measurementId: "G-120R4G6HSC"
};

// Initialize Firebase
export const app = initializeApp(FirebaseConfig);
export const analytics = getAnalytics();
export const providerGoogle = new GoogleAuthProvider();
export const auth = getAuth();
export const db = getFirestore(app)
export const storage = getStorage(app)