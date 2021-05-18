import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCZMpKTwK8vZ_5cjHflNCQtEr4ggs-A4fA",
    authDomain: "catch-of-the-day---henry-9f7ec.firebaseapp.com",
    databaseURL: "https://catch-of-the-day---henry-9f7ec-default-rtdb.europe-west1.firebasedatabase.app"
});

const base = Rebase.createClass(firebaseApp.database());

// this is a named export so has to be exported with curly brackets
export { firebaseApp };

// this is a default export
export default base;
