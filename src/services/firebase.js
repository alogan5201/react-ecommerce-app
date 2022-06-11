/* eslint-disable @typescript-eslint/comma-dangle */
import * as firebase from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { getDatabase, ref } from 'firebase/database';
import { getFirestore } from 'firebase/firestore';

export const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyDy5ZyhRZLs2WDGpH49aPSye3w4AsFr1NY',
  authDomain: 'istore-a8970.firebaseapp.com',
  projectId: 'istore-a8970',
  storageBucket: 'istore-a8970.appspot.com',
  messagingSenderId: '755703551426',
  appId: '1:755703551426:web:6dcd5eb8bcf277197a325b',
});
export const auth = getAuth(firebaseApp);
export const firestore = getFirestore(firebaseApp);
export const database = getDatabase(firebaseApp);
export const usersTableRef = ref(database);

export const connectionStatus = ref(database, '.info/connected');

export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();

  signInWithRedirect(auth, provider);
};
export const currentUser = auth.currentUser ? auth.currentUser : null;

export const verifyAuth = () => {
  return onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      return user;
    } else {
      return null;
    }
  });
};
/* 

! danger, does not work 
TODO make it work better 
*/
export const signOutWithGoogle = async () => {
  await signOut(auth);
};
