import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCCsnYDHST7q5GqJozucacT42xHamH0P20",
  authDomain: "liu-printers.firebaseapp.com",
  projectId: "liu-printers",
  storageBucket: "liu-printers.appspot.com",
  messagingSenderId: "1027891140980",
  appId: "1:1027891140980:web:ac830275976a052a42b421",
};

// connect to firebase backend
firebase.initializeApp(firebaseConfig);

// initialize firestore database service
const db = firebase.firestore();

export { db };
