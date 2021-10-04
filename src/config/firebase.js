// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAN20ut0En4pJ6nL9mSfffUdDikBq-EAjI",
  authDomain: "swiggy-clone-55d64.firebaseapp.com",
  projectId: "swiggy-clone-55d64",
  storageBucket: "swiggy-clone-55d64.appspot.com",
  messagingSenderId: "167851510703",
  appId: "1:167851510703:web:4f74c41d4641f04899fd5a",
  measurementId: "G-D5CZM4XNTL"
};

firebase.initializeApp(firebaseConfig);
export default firebase;
