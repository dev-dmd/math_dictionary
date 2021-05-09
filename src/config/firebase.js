import firebase from 'firebase';
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

export default firebase;