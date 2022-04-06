import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDa5Ru3j5ZWMyJBly04FDcMrzNjRwEwPqc",
    authDomain: "smusic-2d0fa.firebaseapp.com",
    projectId: "smusic-2d0fa",
    storageBucket: "smusic-2d0fa.appspot.com",
    messagingSenderId: "713167330745",
    appId: "1:713167330745:web:08e1b66cb956a712116a68",
    measurementId: "G-KB2KJ9CQKM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app