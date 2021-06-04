import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
  apiKey: 'AIzaSyC5Kkg3DAA_CYzd5nKg2bIfmOVwZiBRhF4',
  authDomain: 'todoist-65f7d.firebaseapp.com',
  projectId: 'todoist-65f7d',
  storageBucket: 'todoist-65f7d.appspot.com',
  messagingSenderId: '389606020078',
  appId: '1:389606020078:web:827bc433ffba126209b4ff',
});

export { firebaseConfig as firebase };
