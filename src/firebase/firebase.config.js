// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnxahl9SVWrwJHAHgazSwpq9MQIdEuW6k",
  authDomain: "artisan-paradise-ea42a.firebaseapp.com",
  projectId: "artisan-paradise-ea42a",
  storageBucket: "artisan-paradise-ea42a.appspot.com",
  messagingSenderId: "191664802469",
  appId: "1:191664802469:web:8eebe1681c5c7a002a5b4c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
