// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB41G2_6pGxxfqJ1EtuGettdSWFzI6Fats",
  authDomain: "netflixgpt-8c7ff.firebaseapp.com",
  projectId: "netflixgpt-8c7ff",
  storageBucket: "netflixgpt-8c7ff.firebasestorage.app",
  messagingSenderId: "1054867691602",
  appId: "1:1054867691602:web:a3791c4bc12b351dd9e78b",
  measurementId: "G-G84TFMLJ5C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
