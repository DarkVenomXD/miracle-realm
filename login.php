<?php
session_start();

// Check if user is already logged in, redirect to the map page
if (isset($_SESSION['loggedin']) && $_SESSION['loggedin'] === true) {
    header("Location: map.php");
    exit;
}

$error = '';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Define your login credentials (username and password)
    $valid_username = 'admin'; // You can change this
    $valid_password = 'password'; // Change this to a strong password

    // Get form input
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Validate login credentials
    if ($username === $valid_username && $password === $valid_password) {
        $_SESSION['loggedin'] = true;
        $_SESSION['username'] = $username;
        header("Location: map.php"); // Redirect to the map page
        exit;
    } else {
        $error = 'Invalid username or password!';
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
</head>
<body>
    <h1>Login to Access Dynmap</h1>
    <form method="POST" action="login.php">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required><br><br>

        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required><br><br>

        <input type="submit" value="Login">
    </form>

    <?php
    if ($error) {
        echo "<p style='color: red;'>$error</p>";
    }
    ?>
</body>
</html>
