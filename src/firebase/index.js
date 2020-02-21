import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9aCEaAwwXsZR6VvhXTEfJxQtuxS_qmmU",
  authDomain: "alena-nails.firebaseapp.com",
  databaseURL: "https://alena-nails.firebaseio.com",
  projectId: "alena-nails",
  storageBucket: "alena-nails.appspot.com",
  messagingSenderId: "645298612016",
  appId: "1:645298612016:web:016a28e401d0c972278af5"
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, app, firebase as default };
