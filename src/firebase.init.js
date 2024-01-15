// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAAJynbFfu_lKR5hLxuTxElZcrQIJfkA8",
  authDomain: "ema-john-simple-437ed.firebaseapp.com",
  projectId: "ema-john-simple-437ed",
  storageBucket: "ema-john-simple-437ed.appspot.com",
  messagingSenderId: "355797747250",
  appId: "1:355797747250:web:f4512f42663b207e40de2b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth 