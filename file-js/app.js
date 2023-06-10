 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAVntNdyaleeCE4JFGt10g0Plm7F1vl_-w",
    authDomain: "signup-with-firebase-521f1.firebaseapp.com",
    projectId: "signup-with-firebase-521f1",
    storageBucket: "signup-with-firebase-521f1.appspot.com",
    messagingSenderId: "676315268730",
    appId: "1:676315268730:web:30b4d8de3cf4c7418d9dc3",
    measurementId: "G-3GMVKSVV64"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

function Register() {
    let username = document.querySelector('#username').value;
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;

    if(validateEmail(email) == false || validatePassword(password) == false) {
        alert('email or password is invalid');
        return;
    }
    if(validateField(username) == false || validateField(email) == false) {
        alert('one or more field is null');
        return;
    }

    auth.createUserWithEmailAndPassword(email, password)
        .then(() => {
            let user = auth.currentUser;
            let database_ref = database.ref();

            let user_data = {
                email: email,
                username: username,
                pw: password,
                last_login: Date.now()
            };

            database_ref.child('users/' + user.uid).set(user_data);

            alert('Register successfully');
        })
        .catch((error) => {
            let error_code = error.code;
            let error_message = error.message;

            alert(error_message)
        })
}

function validateEmail(email) {
    let expression = /^[^@]+@\w+(\.\w+)+\w$/;
    if(expression.test(email) == true) {
        return true;
    }
    else {
        return false;
    }
}

function validatePassword(password) {
    if(password.length < 6) {
        return false
    }
    else {
        return true
    }
}

function validateField(field) {
    if(field == null){
        return false;
    }
    if(field.length <= 0) {
        return false 
    }
    else{
        return true;
    }
}