// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApmZB36B7laWKCSSQwg9dTUN3e-pxmP0I",
  authDomain: "phoneotp-51be2.firebaseapp.com",
  databaseURL: "https://phoneotp-51be2-default-rtdb.firebaseio.com",
  projectId: "phoneotp-51be2",
  storageBucket: "phoneotp-51be2.appspot.com",
  messagingSenderId: "831921641811",
  appId: "1:831921641811:web:bc9a7074435ff0a1df69a6",
  measurementId: "G-2BZ5PNXJR5"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
export { app, db, storage };
