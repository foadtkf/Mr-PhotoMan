// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-wNMvUSCk7sk8dEi0MSw9aKd5VD7BJZM",
  authDomain: "mr-photoman.firebaseapp.com",
  projectId: "mr-photoman",
  storageBucket: "mr-photoman.appspot.com",
  messagingSenderId: "713809194770",
  appId: "1:713809194770:web:00d630155d8502d6564dcb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth