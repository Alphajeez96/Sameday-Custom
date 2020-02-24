import firebase from 'firebase/app'
import 'firebase/firestore'
// import 'firebase/firebase-analytics'

var firebaseConfig = {
  apiKey: "AIzaSyAtUMwtfoUXzQP9Tmn-tGf_ZzHK3P2-QAg",
  authDomain: "my-blog-4961b.firebaseapp.com",
  databaseURL: "https://my-blog-4961b.firebaseio.com",
  projectId: "my-blog-4961b",
  storageBucket: "my-blog-4961b.appspot.com",
  messagingSenderId: "309669804697",
  appId: "1:309669804697:web:1650941fa44ae080d55608",
  measurementId: "G-QJPJDWH9J5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

  const db = firebase.firestore();

  db.settings({ timestampsInSnapshots: true });

  export default db;