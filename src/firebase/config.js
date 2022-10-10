import firebase  from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAje14W5TqKF8kNhSGYZGx2SH-QrorBJF0",
    authDomain: "financemanager-34d54.firebaseapp.com",
    projectId: "financemanager-34d54",
    storageBucket: "financemanager-34d54.appspot.com",
    messagingSenderId: "110070370498",
    appId: "1:110070370498:web:76c710eb01d76ca4552b5b"
};

//innit firebase

firebase.initializeApp(firebaseConfig)

//init service
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

//timestamp
const timestamp = firebase.firestore.Timestamp


export {projectFirestore, projectAuth, timestamp}