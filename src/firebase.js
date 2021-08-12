import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBS7loT3XpFH11Rh955Afq4GOmOz1hMvFo",
  authDomain: "slack-4fb2a.firebaseapp.com",
  databaseURL: "https://slack-4fb2a-default-rtdb.firebaseio.com",
  projectId: "slack-4fb2a",
  storageBucket: "slack-4fb2a.appspot.com",
  messagingSenderId: "933127610714",
  appId: "1:933127610714:web:caba72cbf14e8d12f65363",
  measurementId: "G-CD2SXWY3D9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
