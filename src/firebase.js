import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAkOAG390ximNDBSxtmqo7GotnjWA7egyE",
    authDomain: "clone-dfd1a.firebaseapp.com",
    databaseURL: "https://clone-dfd1a.firebaseio.com",
    projectId: "clone-dfd1a",
    storageBucket: "clone-dfd1a.appspot.com",
    messagingSenderId: "255694177080",
    appId: "1:255694177080:web:e4fc72cd14a85ce1ffb7cd",
    measurementId: "G-D0CNZLSS8J"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ experimentalForceLongPolling: true });

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };