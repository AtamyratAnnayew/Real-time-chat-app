import './App.css';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'; // 
import 'firebase/firestore';
import { useState, useEffect } from 'react';
import Button from './components/Button';
import Channel from './components/Channel';
import AuthForm from './components/AuthForm'; // import it at the top


firebase.initializeApp({
  apiKey: 'AIzaSyBnFdUnfOGI0hkTNJocvAZh5j-INNG7L4k',
  authDomain: 'realtime-chat-app-4a647.firebaseapp.com',
  projectId: 'realtime-chat-app-4a647',
  storageBucket: 'realtime-chat-app-4a647.appspot.com',
  messagingSenderId: '580522930225',
  appId: '1:580522930225:web:7eb5d780bf0b4480bca510',
  measurementId: 'G-7VL8ZWF1DM',
});

const db = firebase.firestore();
const auth = firebase.auth();

function App() {
  const [user, setUser] = useState<firebase.User | null>(() => auth.currentUser);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      if (initializing) {
        setInitializing(false);
      }
    });

    return unsubscribe;
  }, [initializing]);

  const signInWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.useDeviceLanguage();

    try {
      await auth.signInWithPopup(provider);
    } catch (error) {
      console.error(error);
    }
  };

  if (initializing) return <div>Loading...</div>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 p-4">
  <div className="w-full max-w-2xl bg-white shadow-md rounded-xl p-6">
    {user ? (
      <>
        <h2 className="text-2xl font-semibold text-center text-blue-600 mb-6">
          Welcome to the chat
        </h2>
        <Channel user={user} db={db} />
      </>
    ) : (
      <>
        <div className="flex flex-col items-center gap-4">
          <Button onClick={signInWithGoogle}>
            Sign In With Google
          </Button>
          <AuthForm onUserAuthenticated={(user) => setUser(user)} />
        </div>
      </>
    )}
  </div>
</div>

  );
}

export default App;

// src/App.tsx
// import React, { useEffect, useState } from "react";
// import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
// import { auth, provider } from "./firebase";
// import Button from "./components/Button";

// const App: React.FC = () => {
//   const [user, setUser] = useState<User | null>(null);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//     });

//     return () => unsubscribe();
//   }, []);

//   const signInWithGoogle = async () => {
//     try {
//       await signInWithPopup(auth, provider);
//     } catch (error) {
//       console.error("Google Sign-In Error:", error);
//     }
//   };

//   return (
//     <div>
//       {!user ? (
//         <Button onClick={signInWithGoogle}>Sign In With Google</Button>
//       ) : (
//         <div>
//           <p>Welcome, {user.displayName}</p>
//           <Button onClick={() => signOut(auth)}>Sign Out</Button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;
