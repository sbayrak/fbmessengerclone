import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyCmzvgdE5TF1o3OXVfByB_65lYdirQaF-Q',
  authDomain: 'fbmessengerclone-7bc8a.firebaseapp.com',
  databaseURL: 'https://fbmessengerclone-7bc8a.firebaseio.com',
  projectId: 'fbmessengerclone-7bc8a',
  storageBucket: 'fbmessengerclone-7bc8a.appspot.com',
  messagingSenderId: '486234527263',
  appId: '1:486234527263:web:c8cb0e042537e94249e72a',
  measurementId: 'G-BBK4GHLXGR',
});

const db = firebase.firestore();
export default db;
