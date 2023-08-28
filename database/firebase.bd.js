// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import dotenv from 'dotenv';
import * as firebase from 'firebase/app';
import 'firebase/database';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
dotenv.config();

const firebaseConfig = {
          apiKey: process.env.FIREBASE_API_KEY,
          authDomain: process.env.FIREBASE_AUTH_DOMAIN,
          projectId: process.env.FIREBASE_PROJECT_ID,
          storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
          messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
          appId: process.env.FIREBASE_APP_ID,
        };
console.log(firebaseConfig)

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = getFirestore(app);


// Get a list of cities from your database
const userNameAPI = async function getUser(db) {
    const userName = collection(db, 'user');
    const userSnapshot = await getDocs(userName);
    const userList = userSnapshot.docs.map(doc => doc.data());
    return userList
  }

const userApiList = await userNameAPI(db) 
console.log(userApiList)

export default db
