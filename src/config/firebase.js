import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp  } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAVEjAA_ucvCFrn1CTucFlgvUWifWZVE68",
  authDomain: "profoliofeedback.firebaseapp.com",
  projectId: "profoliofeedback",
  storageBucket: "profoliofeedback.firebasestorage.app",
  messagingSenderId: "354231664623",
  appId: "1:354231664623:web:7633c1f6a835d7c3c1001a",
  measurementId: "G-3REER0YGDL",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db , collection, addDoc, serverTimestamp };
