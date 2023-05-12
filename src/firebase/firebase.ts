import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { IFireConfig } from "../types/types";
import { doc, getFirestore } from "firebase/firestore";

const firebaseConfig: IFireConfig = {
  apiKey: "AIzaSyCv6abFpSG3EsA-rmTN7-bmSWhKZ0hzxko",
  authDomain: "fire-shop-ff7c3.firebaseapp.com",
  projectId: "fire-shop-ff7c3",
  storageBucket: "fire-shop-ff7c3.appspot.com",
  messagingSenderId: "308859032176",
  appId: "1:308859032176:web:d2bbed2452cb7deeda9ab5"
};

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