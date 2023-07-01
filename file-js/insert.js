// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlcO3S1H_E6iqOlSCcnaHMmXF9_Nnf224",
  authDomain: "upload-ba2cd.firebaseapp.com",
  projectId: "upload-ba2cd",
  storageBucket: "upload-ba2cd.appspot.com",
  messagingSenderId: "1072083911484",
  appId: "1:1072083911484:web:de519cf0f9d8912bf09439"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();


function dragdrop(event){
    var filename = URL.createObjectURL(event.target)
}