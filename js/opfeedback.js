// Initialize Firebase
var config = {
apiKey: "AIzaSyDORzDYSOK5DBWw5IQLe6AICCBbyHS8kak",
  authDomain: "mahabaleshwar-online-mart.firebaseapp.com",
  databaseURL: "https://mahabaleshwar-online-mart-default-rtdb.firebaseio.com",
  projectId: "mahabaleshwar-online-mart",
  storageBucket:"mahabaleshwar-online-mart.firebasestorage.app",
  messagingSenderId: "1038337673564",
  appId: "1:135766399760:web:b9d9b40a3c7680e99be395"

};

firebase.initializeApp(config);

const dbRef = firebase.database().ref();

const usersRef = dbRef.child('feedback');
const userListUI = document.getElementById("userList");

usersRef.on("child_added", snap => {
	let user = snap.val();

	let $li = document.createElement("li");
	$li.innerHTML = user.name;
	
	$li.setAttribute("child-key", snap.key);
	$li.addEventListener("click", userClicked)
	userListUI.append($li);

});

function userClicked(e) {

	var userID = e.target.getAttribute("child-key");

	const userRef = dbRef.child('feedback/' + userID);
	const userDetailUI = document.getElementById("userDetail");

	userDetailUI.innerHTML = ""

	userRef.on("child_added", snap => {

		var $p = document.createElement("p");
		$p.innerHTML = snap.key  + " - " +  snap.val()
		userDetailUI.append($p);
	});

}


