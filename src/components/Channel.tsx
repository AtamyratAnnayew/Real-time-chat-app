import React, { useEffect, useState, ChangeEvent, FormEvent } from "react";
import Message from "./Message";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import {  useRef } from 'react';


type Props = {
  user: firebase.User | null;
  db: firebase.firestore.Firestore | null;
};

type ChatMessage = {
  id: string;
  text: string;
  createdAt?: {
    seconds: number;
  };
  uid: string;           // ✅ sender's UID
  currentUid?: string;  
  displayName: string;
  photoUrl?: string;
};

const Channel: React.FC<Props> = ({ user, db }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    if (db) {
      const unsubscribe = db
        .collection("message")
        .orderBy("createdAt")
        .limit(100)
        .onSnapshot((querySnapshot) => {
          const data = querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          })) as ChatMessage[];
          setMessages(data);
        });

      return unsubscribe;
    }
  }, [db]);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewMessage(e.target.value);
  };

  const handleOnSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (db && user) {
      const { uid, displayName, photoURL } = user;

      await db.collection("message").add({
        text: newMessage,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        displayName,
        photoUrl: photoURL,
      });

      setNewMessage("");
    }
  };
  const messagesEndRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
}, [messages]);


  return (
    <div className="flex flex-col h-[70vh]">
      <ul className="flex-1 overflow-y-auto p-4 bg-gray-100 rounded-lg mb-4">
        {messages.map((msg) => (
          <li key={msg.id}>
            <Message
  createdAt={msg.createdAt}
  text={msg.text}
  displayName={msg.displayName}
  photoUrl={msg.photoUrl}
  uid={msg.uid} // ✅ Add this
  currentUid={user?.uid} // ✅ Also pass the current user’s UID
/>
          </li>
        ))}
        <div ref={messagesEndRef} />
      </ul>

      <form onSubmit={handleOnSubmit} className="flex gap-2">
        <input
          type="text"
          value={newMessage}
          onChange={handleOnChange}
          placeholder="Type your message..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          disabled={!newMessage.trim()}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Channel;
