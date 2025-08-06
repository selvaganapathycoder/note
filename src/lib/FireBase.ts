import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAtYJPzXkxoOScNGQBTopZrjanRncaBPPA",
  authDomain: "note-8e294.firebaseapp.com",
  projectId: "note-8e294",
  storageBucket: "note-8e294.appspot.com",  // ✅ fixed here
  messagingSenderId: "902490582476",
  appId: "1:902490582476:web:ad7e08f2db24e66b1a0169",
  measurementId: "G-6P8ZD5CGJB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
