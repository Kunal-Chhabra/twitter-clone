import firebase from 'firebase'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDN6amq8ZFErlHst1LWcrzM2KxfHMn0hWk",
  authDomain: "twitter-clone-c88b7.firebaseapp.com",
  projectId: "twitter-clone-c88b7",
  storageBucket: "twitter-clone-c88b7.appspot.com",
  messagingSenderId: "678615147791",
  appId: "1:678615147791:web:8823ddf0edf2a9d90dca7a",
  measurementId: "G-FGX6FJHJLK"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()

  export default db;


