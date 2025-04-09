document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent default form submission

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Replace with your actual authentication logic
  if (username === "lssproject05@gmail.com" && password === "@lss1234") {
    // Successful login
    alert("Login successful!");
    // Redirect to admin console or perform other actions
    window.location.href = "dashboard.html"; // Example: Redirect to a dashboard
  } else {
    // Failed login
    alert("Invalid username or password.");
  }
});