// src/firebase.ts
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBnFdUnfOGI0hkTNJocvAZh5j-INNG7L4k",
  authDomain: "realtime-chat-app-4a647.firebaseapp.com",
  projectId: "realtime-chat-app-4a647",
  storageBucket: "realtime-chat-app-4a647.appspot.com",
  messagingSenderId: "580522930225",
  appId: "1:580522930225:web:7eb5d780bf0b4480bca510",
  measurementId: "G-7VL8ZWF1DM"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
