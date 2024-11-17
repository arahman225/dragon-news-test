// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8XVLXnzNXrjSaUYEi2JWvlu3-DQ87KB8",
  authDomain: "simple-dragon-news-test.firebaseapp.com",
  projectId: "simple-dragon-news-test",
  storageBucket: "simple-dragon-news-test.firebasestorage.app",
  messagingSenderId: "502476766109",
  appId: "1:502476766109:web:bbcfca3a3925a790534d74"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);