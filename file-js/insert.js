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
firebase.initializeApp(firebaseConfig);
   console.log(firebase);
   function uploadImage() {
      const ref = firebase.storage().ref();
      const file = document.querySelector("#photo").files[0];
      const name = +new Date() + "-" + file.name;
      const metadata = {
         contentType: file.type
      };
      const task = ref.child(name).put(file, metadata);task
      .then(snapshot => snapshot.ref.getDownloadURL())
      .then(url => {
      console.log(url);
      alert('image uploaded successfully');
      document.querySelector("#image").src = url;
   })
   .catch(console.error);
   }
   const errorMsgElement = document.querySelector('span#errorMsg');