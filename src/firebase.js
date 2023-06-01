import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA3gbOaP0i-nEwo330YsIyCtrgYt8ADPS8",
    authDomain: "netflix-clone-5efa8.firebaseapp.com",
    projectId: "netflix-clone-5efa8",
    storageBucket: "netflix-clone-5efa8.appspot.com",
    messagingSenderId: "647769630437",
    appId: "1:647769630437:web:ce00474c9c8e0d526ed60c"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
  