// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDHjLMPokSycoVLouT370jBCaMjbrefDs",
  authDomain: "jov-web.firebaseapp.com",
  projectId: "jov-web",
  storageBucket: "jov-web.appspot.com",
  messagingSenderId: "836607914469",
  appId: "1:836607914469:web:91b2301c45e7d58fdb7f0c",
  measurementId: "G-P5VBLVTVCF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);