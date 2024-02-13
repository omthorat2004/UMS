// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5GPPHZ9FYLbc84vmQdfnH-0YYwlmJtbc",
  authDomain: "tsproject-e8d85.firebaseapp.com",
  projectId: "tsproject-e8d85",
  storageBucket: "tsproject-e8d85.appspot.com",
  messagingSenderId: "902013945221",
  appId: "1:902013945221:web:ed9a283fe647eed47f30ec",
  measurementId: "G-LP2DT99F00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
const analytics = getAnalytics(app);