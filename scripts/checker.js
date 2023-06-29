/*

//Check if the username session variable is set
if ('<?php echo isset($_SESSION["username"]); ?>' === '1') {
    // Display a personalized welcome message
    console.log('Welcome, <?php echo $_SESSION["username"]; ?>!');
}

// Get the username parameter from the URL
const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get('username');

// If the username parameter is set, display a personalized welcome message
if (username) {
  console.log('Welcome, ' + username + '!');
} else{
    location.href = "Sign/login.html"
}*/
/*<?php
session_start();

// Check if the username session variable is set
if (!isset($_SESSION["username"])) {
    header("Location: Sign/login.html"); // Redirect to the login page
    exit(); // Stop further execution
}
?>*/
var pusers = document.getElementById("pusers");

  // Get the username parameter from the URL
  const urlParams = new URLSearchParams(window.location.search);
  const username = urlParams.get('username');

  // If the username parameter is set, display a personalized welcome message
  if (username) {
    console.log('Welcome, ' + username + '!');
    document.cookie = "username=" + username; // Set the username cookie
    //pusers.innerText = username
  } else {
    // Retrieve the username cookie
    const cookies = document.cookie.split(';');
    let storedUsername = '';
    cookies.forEach(cookie => {
      const [name, value] = cookie.trim().split('=');
      if (name === 'username') {
        storedUsername = value;
      }
    });

    // If the username cookie is set, display a personalized welcome message
    if (storedUsername) {
      console.log('Welcome back, ' + storedUsername + '!');
      pusers.innerHTML = storedUsername
    } else {
      location.href = "Sign/login.html"; // Redirect to the login page
    }
  }
