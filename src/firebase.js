// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcZMckRZrMqskZXR0nYA7UvlleehvvQ6I",
  authDomain: "reels-6438b.firebaseapp.com",
  projectId: "reels-6438b",
  storageBucket: "reels-6438b.appspot.com",
  messagingSenderId: "718667627787",
  appId: "1:718667627787:web:285f6a7f0ad8fcec7c760e",
  measurementId: "G-CLZRZKZM31"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const firestore = firebase.firestore();
export const database = {
    users : firestore.collection('users'),
    posts : firestore.collection('posts'),
    comments : firestore.collection('comments'),
    getTimeStamp:firebase.firestore.FieldValue.serverTimestamp
}

export const storage = firebase.storage();
