import Rebase from "re-base";
import firebase from "firebase/app";
import 'firebase/database'; // If using Firebase database
import 'firebase/storage';  // If using Firebase storage

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyADEj20z2wbTMrM3t9BV_akfXbLM0Y169w",
    authDomain: "henry-catch-of-the-day.firebaseapp.com",
    databaseURL: "https://henry-catch-of-the-day-default-rtdb.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// this is a named export so has to be exported with curly brackets
export { firebaseApp };

// this is a default export
export default base;
