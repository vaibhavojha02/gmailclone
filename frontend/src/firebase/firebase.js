import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBQNTf2Ch4_yeFs2VqGbkpMzyrQqR4O7pA",
  authDomain: "clone-d5500.firebaseapp.com",
  projectId: "clone-d5500",
  storageBucket: "clone-d5500.appspot.com",
  messagingSenderId: "132502705734",
  appId: "1:132502705734:web:e0053cf46c6f53010b9c47",
  measurementId: "G-VBJVG2X6GR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
