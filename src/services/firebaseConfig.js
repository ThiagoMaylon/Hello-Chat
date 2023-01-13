import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDA8ZqdCIJz-EOGOXqbGDmDbS46xDbsWoU",
  authDomain: "chat-4c466.firebaseapp.com",
  projectId: "chat-4c466",
  storageBucket: "chat-4c466.appspot.com",
  messagingSenderId: "467854455194",
  appId: "1:467854455194:web:3fe0d20020aabfbf26ca23"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const dbApp = getFirestore(app);
