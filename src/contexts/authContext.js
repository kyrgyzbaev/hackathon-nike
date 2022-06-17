import React, { useEffect, useState } from "react";
import fire from "../fire";

export const authContext = React.createContext();

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState("");
  const [error, setError] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  function signUp(email, password, navigate) {
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => navigate("/login"))
      .catch(err => setError(err.message));
  }

  function login(email, password, navigate) {
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => navigate("/products"))
      .catch(err => setError(err.message));
  }

  function logOut() {
    fire.auth().signOut();
  }

  function authListener() {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        // login: admin@gmail.com password: makersjs9
        if (user.email === "admin@gmail.com") {
          setIsAdmin(true);
        }
        setCurrentUser(user);
      } else {
        setCurrentUser("");
        setIsAdmin(false);
      }
    });
  }
  useEffect(authListener, []);

  // console.log(currentUser);
  return (
    <authContext.Provider
      value={{ currentUser, error, isAdmin, signUp, login, logOut }}>
      {children}
    </authContext.Provider>
  );
};
export default AuthContextProvider;
