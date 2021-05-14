import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAd3ECVe-jINVkhhwkq48b_iTTriEI_SgI",
    authDomain: "todo-app-with-react-fire-82738.firebaseapp.com",
    projectId: "todo-app-with-react-fire-82738",
    storageBucket: "todo-app-with-react-fire-82738.appspot.com",
    messagingSenderId: "1089089542636",
    appId: "1:1089089542636:web:6a2059dc088943e7d588c9",
    measurementId: "G-PWM947SJZW"
});

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();

export { db, auth, storage };