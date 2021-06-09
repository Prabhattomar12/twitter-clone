import firebase from 'firebase';

const firebaseConfig = {
 
  // Enter your firebase app config

};

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  export default db;