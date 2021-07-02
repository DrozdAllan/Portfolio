import firebase from "firebase/app";

import "firebase/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyDvSJaxWg8NIxyPCai1b1_i7YqIgoF8rz0",
  authDomain: "drozdallanportfolio.firebaseapp.com",
  projectId: "drozdallanportfolio",
  storageBucket: "drozdallanportfolio.appspot.com",
  messagingSenderId: "561270481596",
  appId: "1:561270481596:web:8923af385da404f0f4e6b9",
});

// utils
const db = firebase.firestore();

// collection references
const messagesCollection = db.collection("messages");

export { db, messagesCollection };
