// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
  apiKey: "AIzaSyDORzDYSOK5DBWw5IQLe6AICCBbyHS8kak",
  authDomain: "mahabaleshwar-online-mart.firebaseapp.com",
  databaseURL:  "https://mahabaleshwar-online-mart-default-rtdb.firebaseio.com",
  projectId: "mahabaleshwar-online-mart",
  storageBucket: "mahabaleshwar-online-mart.firebasestorage.app",
  messagingSenderId: "1038337673564",
  appId: "1:135766399760:web:b9d9b40a3c7680e99be395"

};
firebase.initializeApp(config);

// Reference orderfrom collection
var messagesRef = firebase.database().ref('orderfrom');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email:email,
    phone:phone,
    message:message
  });
}
function toggleMenu() {
      const menu = document.getElementById("menu");
      menu.classList.toggle("show");
  }
   function goBack() {
            window.history.back();
        }