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

export const createUserProfileDocument = () => async (user, additionalData) => {
    if (!user) return;

    // Get a reference to the place in database where a user profile might be.
    const userRef = firestore.doc(`users/${user.id}`);

    // Go and fetch the document from that location
    const snapshot = await userRef.get();

    if (!snapshot.exists) {
        const createAt = new Date();
        const { displayName, email, photoURL } = user;
        try {
            await userRef.set({
                displayName,
                email,
                photoURL,
                createAt,
                ...additionalData,
            });
        } catch (e) {
            console.error('Error creating user', e)
        }
    }

    return getUserDocument(user.uid)
};

export const getUserDocument = async (uid) => {
    if (!uid) return null;

    try {
        const userDocument = await firestore.collection('users').doc(uid).get()
        return {
            uid, ...userDocument
        }
    } catch (e) {
        console.error('Error fetching user', e.message)
    }

}

export default firebase;
