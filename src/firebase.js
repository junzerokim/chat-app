// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCg56fmT3WU_3g2NRdosuKKnMx-jwoSo0Y',
  authDomain: 'chat-app-548dc.firebaseapp.com',
  projectId: 'chat-app-548dc',
  storageBucket: 'chat-app-548dc.appspot.com',
  messagingSenderId: '236823068495',
  appId: '1:236823068495:web:2f9d7dac0437b486358f3a',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
