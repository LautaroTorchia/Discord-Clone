import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyCY3eLFjQC34y630YE_UqdVWbrlAqTcybU",
    authDomain: "discord-clone-ce312.firebaseapp.com",
    databaseURL: "https://discord-clone-ce312.firebaseio.com",
    projectId: "discord-clone-ce312",
    storageBucket: "discord-clone-ce312.appspot.com",
    messagingSenderId: "694071270395",
    appId: "1:694071270395:web:cdcb8570e408b1cf20095e",
    measurementId: "G-MHV2VJBKTY"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db= firebaseApp.firestore();
  const auth= firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;