// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIYn--1PAPUiUdm7l1IYmoltRBcBGwp6U",
  authDomain: "flavour-of-thai.firebaseapp.com",
  projectId: "flavour-of-thai",
  storageBucket: "flavour-of-thai.appspot.com",
  messagingSenderId: "388864527834",
  appId: "1:388864527834:web:b7b70162a91d793fd544e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;