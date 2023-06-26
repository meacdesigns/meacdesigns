import { initializeApp } from "firebase/app";
import {
  addDoc,
  collection,
  getDocs,
  getFirestore,
  doc,
  updateDoc,
} from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4EttvdR0YuEEjfdrszrd-S_kGmkktp2g",
  authDomain: "meacdesigns-d3168.firebaseapp.com",
  projectId: "meacdesigns-d3168",
  storageBucket: "meacdesigns-d3168.appspot.com",
  messagingSenderId: "517314298133",
  appId: "1:517314298133:web:20540c89212314272f691c",
  measurementId: "G-HF1TWQVC31",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export const addDocument = async ({ collection_name, data }) => {
  try {
    await addDoc(collection(db, collection_name), data);
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};

export const updateDocument = async ({ collection_name, id, data }) => {
  try {
    const docref = doc(db, collection_name, id);
    await updateDoc(docref, data);
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};

export const getDocuments = async ({ collection_name }) => {
  const querySnapshot = await getDocs(collection(db, collection_name));
  const documents = [];
  querySnapshot.forEach((doc) => {
    documents.push({ ...doc.data(), db_id: doc.id });
  });
  return documents;
};
