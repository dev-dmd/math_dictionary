import firebase from 'firebase';
<<<<<<< HEAD

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

firebase.initializeApp(firebaseConfig);
=======
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCB0XZChrkgSJ783sqbCT50q9Q4pCFLOCk",
  authDomain: "math-dictionary-22.firebaseapp.com",
  projectId: "math-dictionary-22",
  storageBucket: "math-dictionary-22.appspot.com",
  messagingSenderId: "698977622257",
  appId: "1:698977622257:web:25035da083cd7e65f73150"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshosts: true });
>>>>>>> fa9b2aff628dbd3fd8a72bd53cec76b5d976be0b

export default firebase;