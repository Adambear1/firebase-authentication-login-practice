import React, { useState, useEffect } from "react";
import "./App.css";
import fireDB from "./config";
import Hero from "./Hero";
import Login from "./Login";
function App() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  const clearInput = () => {
    setEmail("");
    setPasswordError("");
  };

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };
  const handleLogin = (e) => {
    fireDB
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
  };
  const handleLogin = (e) => {
    clearErrors()
    fireDB
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
  };
  const handleLogout = (e) => {
    fireDB.auth().signOut();
  };

  const authListener = () => {
    fireDB.auth().onAuthStateChanged((user) => {
      user ? {
        setUser(user) 
      }: setUser("");
    });
  };

  useEffect(() => {
    authListener();
  }, []);
  return (<>
  {user ?(
    <Login email={email} setEmail={setEmail} password={password} setPassword={setPassword} handleLogin={handleLogin} handleLogout={handleLogout}setHasAccount={setHasAccount} emailError={emailError} passwordError={passwordError}/>
  ) : (
    <Hero handleLogout={handleLogout}/>
  )}
  
  </>)
}

export default App;
