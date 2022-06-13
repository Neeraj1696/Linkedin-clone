import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBVu01OMQC7sANsq9jHBXSb_D4u5A5e2m0",
  authDomain: "linkedin-clone-da8cf.firebaseapp.com",
  projectId: "linkedin-clone-da8cf",
  storageBucket: "linkedin-clone-da8cf.appspot.com",
  messagingSenderId: "953645826031",
  appId: "1:953645826031:web:db91b7c899d62ca7f1c01a",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
