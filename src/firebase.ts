// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your Firebase config (from console)
const firebaseConfig = {
  apiKey: "AIzaSyBR1AVA8QqbGes_NrwmUNArIRMjAegNNJs",
  authDomain: "nexthire-ai-44936.firebaseapp.com",
  projectId: "nexthire-ai-44936",
  storageBucket: "nexthire-ai-44936.firebasestorage.app",
  messagingSenderId: "697550781335",
  appId: "1:697550781335:web:fe5c6790c09881cef922d2",
  measurementId: "G-QL8XGTVZQX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Optional: Analytics (works only in browser)
const analytics = getAnalytics(app);

export { app, analytics };
