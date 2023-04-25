import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
   apiKey: "AIzaSyCx3Nol4UHB6JmJucXVDN-FD-V9wdACSpo",
   authDomain: "insta-pro-72f8b.firebaseapp.com",
   projectId: "insta-pro-72f8b",
   storageBucket: "insta-pro-72f8b.appspot.com",
   messagingSenderId: "404552057159",
   appId: "1:404552057159:web:c4cbcb0cc7407997644c62",
   measurementId: "G-VJ25DW33SP"
 };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
export { app, storage, db, auth, googleProvider };
