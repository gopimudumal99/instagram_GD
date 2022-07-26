// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import {getStorage} from 'firebase/storage'
import {getFirestore} from 'firebase/firestore'
import { getCombinedModifierFlags } from "typescript";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: "instagramgd-74857",
  storageBucket: "instagramgd-74857.appspot.com",
  messagingSenderId: "877368844288",
  appId: process.env.APP_ID
};

// Initialize Firebase
//if there is no length of apps then insitializeapp or if there is length of apps then getAPP
const app = (!getApps.length) ? initializeApp(firebaseConfig): getApp();

const db = getFirestore();
const storage = getStorage();

export{app,db,storage}