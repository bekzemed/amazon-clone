import firebase from 'firebase';

const firebaseConfig = firebase.initializeApp({
  apiKey: 'AIzaSyDTJvyCPCKuCOZf_2ERXhSe6Lpae4_YTB4',
  authDomain: 'clone-374d4.firebaseapp.com',
  projectId: 'clone-374d4',
  storageBucket: 'clone-374d4.appspot.com',
  messagingSenderId: '294069699124',
  appId: '1:294069699124:web:635b2a4910bb64619a0061',
});

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, provider, auth };
