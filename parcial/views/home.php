<?php

session_start();
if (!isset($_SESSION['User'])) {
    header("location:../index.php");
    die();
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Home</title>
    <link rel="stylesheet" href="../css/home.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&display=swap"
        rel="stylesheet">
</head>

<body>
    <h2>¡Bienvenido!</h2>
    <img src="https://media.tenor.com/tpYkO9TsgygAAAAd/congratulations-shinji.gif" alt="">
    <p><a href="../includes/logout.php">Logout</a></p>
</body>

</html>