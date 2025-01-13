import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyBdRlafGA6JXTRr7YfQo2zVYwBNyLowu_M",
  authDomain: "obrazky-c7b79.firebaseapp.com",
  projectId: "obrazky-c7b79",
  storageBucket: "obrazky-c7b79.firebasestorage.app",
  messagingSenderId: "75089448119",
  appId: "1:75089448119:web:5c8529edaf5581a78e1132"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };