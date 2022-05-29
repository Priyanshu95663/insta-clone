
  import firebase from "firebase"
  const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyAy91wNX8ScrRonvKfjthDudMPd2X42qvE",
    authDomain: "insta-clone-94222.firebaseapp.com",
    projectId: "insta-clone-94222",
    storageBucket: "insta-clone-94222.appspot.com",
    messagingSenderId: "421422637932",
    appId: "1:421422637932:web:a7af6f276357e136378949",
    measurementId: "G-FLEMFM0TYL"
  })

  const db=firebase.firestore()
  const auth=firebase.auth()
  const storage=firebase.storage()

  export default {db,auth,storage};