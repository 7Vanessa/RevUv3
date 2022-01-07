import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDwCEMLzoM06Y004um6mu28cimqos1Ll-I",
    authDomain: "revuchat-ab252.firebaseapp.com",
    projectId: "revuchat-ab252",
    storageBucket: "revuchat-ab252.appspot.com",
    messagingSenderId: "489615215838",
    appId: "1:489615215838:web:f3993f97ac0261fcc5464f"
};

let app;

if(firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
}
else {
    app = firebase.app()
}

const db = app.firestore()
const auth = firebase.auth()

export {db, auth};