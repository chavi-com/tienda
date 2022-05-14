// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPFQ57KTm16dSVvUOG2I-MizSo0RqTbB8",
  authDomain: "tiendaedison-a6a70.firebaseapp.com",
  projectId: "tiendaedison-a6a70",
  storageBucket: "tiendaedison-a6a70.appspot.com",
  messagingSenderId: "390223382272",
  appId: "1:390223382272:web:a8f61551a2653dc35bd5e5",
  measurementId: "G-HGRSCEZTK1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);