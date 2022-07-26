// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import {getStorage} from 'firebase/storage'
import {getFirestore} from 'firebase/firestore'
import { getCombinedModifierFlags } from "typescript";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEJM9IQ_VMf7Q2yyAGl6eS9GeieF0jrJc",
  authDomain: "instagramgd-74857.firebaseapp.com",
  projectId: "instagramgd-74857",
  storageBucket: "instagramgd-74857.appspot.com",
  messagingSenderId: "877368844288",
  appId: "1:877368844288:web:cca32225f42471ec7cb8e5"
};

// Initialize Firebase
//if there is no length of apps then insitializeapp or if there is length of apps then getAPP
const app = (!getApps.length) ? initializeApp(firebaseConfig): getApp();

const db = getFirestore();
const storage = getStorage();

export{app,db,storage}