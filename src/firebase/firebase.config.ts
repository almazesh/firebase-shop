import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { doc, getFirestore } from "firebase/firestore";

import { IFireConfig } from "../types/types";

export const firebaseConfig: IFireConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
};

console.log(firebaseConfig)

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

const joinWithGoogle = new GoogleAuthProvider();
const firestoreDoc = doc;

export {
  auth,
  joinWithGoogle,
  firestoreDoc,
  db
}