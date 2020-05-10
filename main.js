// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBHbM1t3nVz2ps_JoNPDd0x07flChNdSSE",
    authDomain: "infernobistro-53ba5.firebaseapp.com",
    databaseURL: "https://infernobistro-53ba5.firebaseio.com",
    projectId: "infernobistro-53ba5",
    storageBucket: "infernobistro-53ba5.appspot.com",
    messagingSenderId: "36867312554",
    appId: "1:36867312554:web:2f3ef583d90d307857f9d3",
    measurementId: "G-72DBMPBYJV"
  };

// Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

// Reference messages collection
var messagesRef = firebase.database().ref('InfernoBistro');

// Listen for form SUBMIT
document.getElementById('contactForm').addEventListener('submit', submitForm);


// Submit Form
function submitForm(e){
    e.preventDefault();


    // Get Values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var subject = getInputVal('subject');
    var message = getInputVal('message');

    // Save Message
    saveMessage(name, email, subject, message);

    // Show alert
    document.querySelector('.alert').style.display = 'block';

    // Hide alert after 3 seconds
    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
    },3000);

    // Clear form
    document.getElementById('contactForm').reset();
}

// Funciton to get form VALUES
function getInputVal(id){
    return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, subject, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        subject: subject,
        message: message
    });
}

