<?php
print_r($_POST["full"]);


$password_hash = password_hash($_POST["password"], PASSWORD_DEFAULT);

$mysqli = require __DIR__ . "/database.php";

$sql = "INSERT INTO users (full, username, email, password_hash )
        VALUES (?, ?, ?, ?)";

$stmt = $mysqli->stmt_init();

if (! $stmt->prepare($sql)){
    die("SQL Error: " . $mysqli->error);
}

$stmt->bind_param("ssss",
                    $_POST["full"],
                    $_POST["username"],
                    $_POST["email"],
                    $password_hash);

if ( $stmt->execute()){                 
    
    header("Location: login.html");
    exit;

} else {

    if ( $mysqli->errno === 1062){
    
        die("Email already taken!!");

    } else {

        die($mysqli->error . " " . $mysqli->errno);
        
    }
}

