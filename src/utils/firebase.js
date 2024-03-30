// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwwgfbmWRq1CQB5Bl4oy25s0BZw6ABEdk",
  authDomain: "netflix-gpt-a1e97.firebaseapp.com",
  projectId: "netflix-gpt-a1e97",
  storageBucket: "netflix-gpt-a1e97.appspot.com",
  messagingSenderId: "672114412937",
  appId: "1:672114412937:web:9ca7fc016523a3d1812558",
  measurementId: "G-L26LT68RN6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);