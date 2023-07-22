// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCGLI-OszlfM1oT7gNZ8uJcytOs9Yae6OE",
    authDomain: "marzaanassessment.firebaseapp.com",
    databaseURL: "https://marzaanassessment-default-rtdb.firebaseio.com",
    projectId: "marzaanassessment",
    storageBucket: "marzaanassessment.appspot.com",
    messagingSenderId: "265399240451",
    appId: "1:265399240451:web:af2f48e914d7a933080b36"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var marzaanassessmentDB = firebase.database().ref('marzaanassessment');

document.getElementById('signup-form').addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();

    var email = document.getElementVal('email');
    var password = document.getElementVal('password');

    console.log(email, password);
}

const getElementVal = (id) => {
    return document.getElementById(id).value;
}

// Sign In Form
var signinForm = document.getElementById('signin-form');
signinForm.addEventListener('submit', function(event) {
    event.preventDefault();
    var email = signinForm.email.value;
    var password = signinForm.password.value;
    
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(function(userCredential) {
            // Redirect to homepage
            window.location.href = "index.html";
        })
        .catch(function(error) {
            // Handle sign in error
            console.log(error);
        });
});

// Sign Up Form
var signupForm = document.getElementById('signup-form');
signupForm.addEventListener('submit', function(event) {
    event.preventDefault();
    var email = signupForm.email.value;
    var password = signupForm.password.value;
    
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(function(userCredential) {
            // Redirect to homepage
            window.location.href = "index.html";
        })
        .catch(function(error) {
            // Handle sign up error
            console.log(error);
        });
});

// News API
var apiKey = "AIzaSyCq1HI1CfgsvEZNRhwk4CKEYx3nef3I1g4";
var apiUrl = "https://newsapi.org/" + apiKey;

axios.get(apiUrl)
    .then(function(response) {
        var newsContainer = document.getElementById('news-container');
        
        for (var i = 0; i < response.data.articles.length; i++) {
            var article = response.data.articles[i];
            var newsItem = document.createElement('div');
            newsItem.innerHTML = "<h2>" + article.title + "</h2><p>" + article.description + "</p><p><a href='" + article.url + "' target='_blank'>Read More</a></p>";
            newsContainer.appendChild(newsItem);
        }
    })
    .catch(function(error) {
        console.log(error);
    });
