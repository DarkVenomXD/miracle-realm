<?php
session_start();

// Check if the user is logged in
if (!isset($_SESSION['loggedin']) || $_SESSION['loggedin'] !== true) {
    header("Location: login.php"); // Redirect to login page if not logged in
    exit;
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dynmap</title>
</head>
<body>
    <h1>Welcome, <?php echo $_SESSION['username']; ?>! Here is the Dynmap:</h1>

    <!-- Embed Dynmap map here -->
    <iframe src="http://yourserverip:8123" width="800" height="600"></iframe>
    
    <br><br>
    <a href="logout.php">Logout</a>
</body>
</html>
