// import { initializeApp } from "firebase/app";
// import { getAuth, onAuthStateChanged } from 'firebase/auth';

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js';


const firebaseApp = initializeApp({
  apiKey: "AIzaSyC_sRinLizXuK-4-IS6MZAoR0Cj8--dl5s",
  authDomain: "test-8a9f2.firebaseapp.com",
  projectId: "test-8a9f2",
  storageBucket: "test-8a9f2.appspot.com",
  messagingSenderId: "621689191162",
  appId: "1:621689191162:web:f61016652b04b11aaaa743",
  measurementId: "G-3TY4DZWD6C"
});

// Initialize Firebase
const auth = getAuth(firebaseApp);

onAuthStateChanged(auth, user => {
    if (user != null) {
        console.log('logged in as ('+ user.email +')');
    } else {
        console.log('no user');
    }
});
