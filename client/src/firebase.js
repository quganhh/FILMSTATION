// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAlszcaA26QZbWQRqnwoPtSoeY84nW7b4c",
  authDomain: "filmstation-af8e2.firebaseapp.com",
  projectId: "filmstation-af8e2",
  storageBucket: "filmstation-af8e2.firebasestorage.app",
  messagingSenderId: "46919195630",
  appId: "1:46919195630:web:5d519dae3a1d52a5248cff",
};

// Khởi tạo Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
