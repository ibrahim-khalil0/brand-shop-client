// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6hqqN7W7TIwzvNbby4-E-1QoPJL2fDRo",
  authDomain: "electronics-shop-26a59.firebaseapp.com",
  projectId: "electronics-shop-26a59",
  storageBucket: "electronics-shop-26a59.appspot.com",
  messagingSenderId: "643018077631",
  appId: "1:643018077631:web:91d351d8f4914da92b9d0a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth