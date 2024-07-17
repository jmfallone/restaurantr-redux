// src/firebaseConfig.ts/js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBK8q5CPpUID4JSwkr54BIS7mJr2QgQ-78",
  authDomain: "restaurantr-398603.firebaseapp.com",
  projectId: "restaurantr-398603",
  storageBucket: "restaurantr-398603.appspot.com",
  messagingSenderId: "865793006233",
  appId: "1:865793006233:web:451f6ff7e921232ce83608",
  measurementId: "G-JTFJBPZKSQ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);