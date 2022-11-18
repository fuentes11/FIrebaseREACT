import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
 import 'firebase/compat/firestore'; 

 const firebaseConfig = {
  apiKey: "AIzaSyBW8TegsYdSngQc9qsrmkvccm4GLBqUzAk",
  authDomain: "restaurantdb-12bb4.firebaseapp.com",
  projectId: "restaurantdb-12bb4",
  storageBucket: "restaurantdb-12bb4.appspot.com",
  messagingSenderId: "304494922682",
  appId: "1:304494922682:web:3c70b0f277eb8340cc2b83",
  measurementId: "G-YP0G1TSH59"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
