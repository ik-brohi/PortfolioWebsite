// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8f23YuLsj3bRZR2SGt4Afe5uwcYwJil4",
  authDomain: "emonsportfolio-b2a5e.firebaseapp.com",
  projectId: "emonsportfolio-b2a5e",
  storageBucket: "emonsportfolio-b2a5e.appspot.com",
  messagingSenderId: "322920464664",
  appId: "1:322920464664:web:d5e584387b89060755de6d",
  measurementId: "G-92D9L6Q93E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;