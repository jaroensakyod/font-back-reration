// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAF8tDeZXO_qBZ_OR1zMB6e9hCEfvDe85c",
  authDomain: "userapi-7668a.firebaseapp.com",
  projectId: "userapi-7668a",
  storageBucket: "userapi-7668a.appspot.com",
  messagingSenderId: "594689124427",
  appId: "1:594689124427:web:076f2c5fff26795d71c5ce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
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
