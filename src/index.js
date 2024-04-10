import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const root = ReactDOM.createRoot(document.getElementById('root'));

const firebaseConfig = {
  apiKey: "AIzaSyCwwgfbmWRq1CQB5Bl4oy25s0BZw6ABEdk",
  authDomain: "netflix-gpt-a1e97.firebaseapp.com",
  projectId: "netflix-gpt-a1e97",
  storageBucket: "netflix-gpt-a1e97.appspot.com",
  messagingSenderId: "672114412937",
  appId: "1:672114412937:web:9ca7fc016523a3d1812558",
  measurementId: "G-L26LT68RN6"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
