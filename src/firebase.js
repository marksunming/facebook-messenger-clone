import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdeyrc20cZsN-yEjXIY_UA3fP4Lgas-jA",
  authDomain: "facebook-messenger-clone-e193c.firebaseapp.com",
  databaseURL: "https://facebook-messenger-clone-e193c.firebaseio.com",
  projectId: "facebook-messenger-clone-e193c",
  storageBucket: "facebook-messenger-clone-e193c.appspot.com",
  messagingSenderId: "851355557755",
  appId: "1:851355557755:web:d33033a1d47a53d84227de",
  measurementId: "G-1193GFX9X2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;