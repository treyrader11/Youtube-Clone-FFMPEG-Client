// import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.FIREBASE_KEY,
  authDomain: "clone-with-ffmpeg.firebaseapp.com",
  projectId: "clone-with-ffmpeg",
  storageBucket: "clone-with-ffmpeg.appspot.com",
  messagingSenderId: "587831095510",
  appId: "1:587831095510:web:b51761d6282804f26b9977",
  measurementId: "G-NQDJJ4TE90"
};

//const analytics = getAnalytics(app);
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export { auth, db };
