// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlSAXe857-tAz-N0PYE0koef3F21QJteo",
  authDomain: "clixpass-777.firebaseapp.com",
  projectId: "clixpass-777",
  storageBucket: "clixpass-777.firebasestorage.app",
  messagingSenderId: "844268949538",
  appId: "1:844268949538:web:16a54bac9d3a91031a7a7b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore (app)