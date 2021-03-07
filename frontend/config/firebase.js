import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCYPVaaVlcp7w3w6lcR4fjFutmgPr6p0JU",
    authDomain: "hoctienganh0dong-62551.firebaseapp.com",
    projectId: "hoctienganh0dong-62551",
    storageBucket: "hoctienganh0dong-62551.appspot.com",
    messagingSenderId: "929189412227",
    appId: "1:929189412227:web:eeff497ed7c34f45f94ab6",
    measurementId: "G-TR22VXEJF8",
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const authFirebase = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => authFirebase.signInWithPopup(provider);
export default firebase;
