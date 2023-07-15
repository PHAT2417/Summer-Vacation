const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});
// Your web app's Firebase configuration
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

  function register() {
    let username = document.querySelector('#username').value;
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;

    if (validateEmail(email) == false || validatePassword(password) == false) {
        alert('Emai or Password is Invalid!!!');
        return;
    }
    if(validateField(username) == false || validateField(email) == false) {
        alert('One or more field is Nul!!!')
        return;
    }

    auth.createUserWithEmailAndPassword(email, password)
        .then(() => {
            let user = auth.currentUser;
            let database_ref = database.ref();
            let user_data = {
                email: email,
                username: username,
                password: password,
                last_login: Date.now()
            };

            database_ref.child('users/' + user.uid).set(user_data)

            alert('Thành công!');

        })
        .catch((error) => {
            let error_code = error.code;
            let error_message = error.message;

            alert(error_message)
        })
  }

  function validateEmail(email) {
    let expresstion = /^[^@]+@\w+(\.\w+)+\w$/;
    if(expresstion.test(email) == false) {
        return false;
    } else {
        return true;
    }
  }

  function validatePassword(password) {
    if(password < 6) {
        return false;
    } else {
        return true;
    }
  }

  function validateField(field) {
    if(field == null) {
        return false;
    }
    if(field.length <= 0) {
        return false;
    } else {
        return true;
    }
  }

    function login() {
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;

    if (validateEmail(email) == false || validatePassword(password) == false) {
        alert('Sai tk mk rồi ku >:[');
        return;
    }

    auth.signInWithEmailAndPassword(email, password)
        .then(() => {
            alert('Đăng nhập thành công!');

        })
        .catch((error) => {
            let error_code = error.code;
            let error_message = error.message;

            alert(error_message);
        });
    }
  
  
  function signInAnonymously() {
    firebase
      .auth()
      .signInAnonymously()
      .then(() => {
        // Success, the user is logged in anonymously
        alert("Đăng nhập ẩn danh thành công...");
        // You can perform additional actions or redirect the user to another page
      })
      .catch((error) => {
        // An error occurred during anonymous login
        alert("Error logging in anonymously: " + error.message);
      });
  }
  