// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5blKu9VV3fxN35JZOvr2zgbNsSn2G_oA",
  authDomain: "sport-app-c308a.firebaseapp.com",
  projectId: "sport-app-c308a",
  storageBucket: "sport-app-c308a.appspot.com",
  messagingSenderId: "141126152983",
  appId: "1:141126152983:web:5af9c0cccb8ce57ea2bd52",
  measurementId: "G-GJWKHPHZ15"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const storage = getStorage();
