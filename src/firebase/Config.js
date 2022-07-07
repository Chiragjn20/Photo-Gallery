import * as firebase from "firebase/app";
import 'firebase/storage'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyC0EMNmx_5WxmpuXt3s__5a4ujkb8yQmTQ",
    authDomain: "firegram-c17e1.firebaseapp.com",
    projectId: "firegram-c17e1",
    storageBucket: "firegram-c17e1.appspot.com",
    messagingSenderId: "742229249021",
    appId: "1:742229249021:web:4481eae40423f180452794"
  };

  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();

  const projectFirestore = firebase.firestore();

  export {projectFirestore , projectStorage}