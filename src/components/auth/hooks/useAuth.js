import React, { useState, useEffect, useContext, createContext } from 'react';
import firebase from '../../../config/firebase';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuth, setIsAuth] = useState(true);

  const sendSignInLinkToEmail = email => {
    firebase.auth().sendSignInLinkToEmail(email, {
      url: 'http://localhost:3000/',
      handleCodeInApp: true,
    });
    return true;
  };
  
  const singInWithEmailLink = async (email, code) => {
    const result = await firebase.auth().signInWithEmailLink(email, code);
    setUser(result.user);
    return true;
  };

  const logout = async () => {
    await firebase.auth().signOut();
    setUser(null);
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      setUser(user);
      setIsAuth(false);
    });
    return () => {
      const cleanup = unsubscribe();
      return cleanup;
    };
  }, []);


  const allValues = {
    user,
    isAuth,
    sendSignInLinkToEmail,
    singInWithEmailLink,
    logout
  }

  return (
    <AuthContext.Provider value={allValues}>
      {
        !isAuth && children
      }
    </AuthContext.Provider>
  )

};