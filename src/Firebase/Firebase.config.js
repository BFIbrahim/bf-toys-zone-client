// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPWBXC4mOpUi5YJRHEsdVPejc-ImefKh8",
  authDomain: "bf-toy-cars.firebaseapp.com",
  projectId: "bf-toy-cars",
  storageBucket: "bf-toy-cars.appspot.com",
  messagingSenderId: "859710818594",
  appId: "1:859710818594:web:e2be2faf6d5745e2c77d7b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;