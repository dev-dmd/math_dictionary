import React, { useState, useEffect, useContext, createContext} from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
})

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuth, setIsAuth] = useState(true);

  const sendSignInLinkToEmail = email => {
    return firebase.auth().sendSignInLinkToEmail(email, {
      url: 'http://localhost:3000/confirm',
      handleCodeInApp: true,
    }).then(() => {
      return true;
    });
  };
  
  const singInWithEmailLink = (email, code) => {
    return firebase.auth().signInWithEmailLink(email, code).then(result => {
      setUser(result.user);
      return true;
    });
  };

  const logout = () => {
    return firebase.auth().signOut().then(() => {
      setUser(null);
    });
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
        isAuth && children
      }
    </AuthContext.Provider>
  )

};
