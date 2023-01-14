import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCHOQS6K1-PZtFDpRYyza4uJsJP0bg4cFw",
    authDomain: "test-8ef61.firebaseapp.com",
    projectId: "test-8ef61",
    storageBucket: "test-8ef61.appspot.com",
    messagingSenderId: "1043471927062",
    appId: "1:1043471927062:web:22cff3a3feb799298d7237",
    measurementId: "G-HT8C19Z0RF"
}

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };