// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlW2ck23YY3bLS0XB6Cq_G3KOVeNakK_g",
  authDomain: "kaswarga-kaplingan.firebaseapp.com",
  projectId: "kaswarga-kaplingan",
  storageBucket: "kaswarga-kaplingan.firebasestorage.app",
  messagingSenderId: "1034590673989",
  appId: "1:1034590673989:web:225159a670557cf42f972c",
  measurementId: "G-LQ8GDL9QNR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);