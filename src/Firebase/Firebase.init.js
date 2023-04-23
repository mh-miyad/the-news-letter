// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZxdfR_t-XG2VNLVNwLvCAhZHaPW_6ouo",
  authDomain: "the-news-protector.firebaseapp.com",
  projectId: "the-news-protector",
  storageBucket: "the-news-protector.appspot.com",
  messagingSenderId: "1065808185419",
  appId: "1:1065808185419:web:940e78f5a082d2b2f1e5ce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export default app