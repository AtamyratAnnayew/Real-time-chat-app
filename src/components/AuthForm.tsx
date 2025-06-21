import React, { useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

type Props = {
  onUserAuthenticated: (user: firebase.User) => void;
};

const AuthForm: React.FC<Props> = ({ onUserAuthenticated }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegister, setIsRegister] = useState(true); // toggle between register/login

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (isRegister) {
        // Create user
        const result = await firebase
          .auth()
          .createUserWithEmailAndPassword(email, password);
        if (result.user) {
          await result.user.updateProfile({ displayName: name });
          // Optionally save phone number to Firestore
          onUserAuthenticated(result.user);
        }
      } else {
        // Sign in existing user
        const result = await firebase
          .auth()
          .signInWithEmailAndPassword(email, password);
        if (result.user) {
          onUserAuthenticated(result.user);
        }
      }
    } catch (error) {
      alert((error as Error).message);
    }
  };

  return (
    <div className="w-full max-w-md bg-white rounded-xl shadow p-6 space-y-4">
      <h2 className="text-xl font-bold text-center text-blue-600">
        {isRegister ? "Register" : "Login"} with Email
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {isRegister && (
          <>
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </>
        )}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          {isRegister ? "Sign Up" : "Login"}
        </button>
      </form>

      <button
        type="button"
        onClick={() => setIsRegister(!isRegister)}
        className="text-sm text-blue-500 hover:underline block mx-auto"
      >
        {isRegister ? "Already have an account? Login" : "No account? Register"}
      </button>
    </div>
  );
};

export default AuthForm;
