<?php

    session_start();

    session_destroy();

    //header("Location: index.html");
    //exit;

?>

<!DOCTYPE html>
<html>
<head>
    <title>Logout - HackVerse</title>
    <link rel="stylesheet" type="text/css" href="../CSS/logout.css">
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Logout</h1>
        </div>
        <div class="content">
            <p>You have been successfully logged out.</p>
            <button class="btn" onclick="window.location.href ='login.html'">Log In</button>
            <button class="btn" onclick="window.location.href = 'signup.html'">Sign Up</button>
        </div>
        <div class="footer">
            <p>© 2023 HackVerse. All rights reserved.</p>
        </div>
    </div>
</body>
</html>