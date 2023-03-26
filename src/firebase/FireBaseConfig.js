import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDidvG2oBdNbGfuB_-_xGqdbQkRCFTIUd0",
  authDomain: "vayparexpodatabase.firebaseapp.com",
  projectId: "vayparexpodatabase",
  storageBucket: "vayparexpodatabase.appspot.com",
  messagingSenderId: "695347713637",
  appId: "1:695347713637:web:c1b1b7588b1f7c4ec9988c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app)
// const provider = new GoogleAuthProvider();

export {db, auth}