<?php

session_start();

include 'connection.php';
$Email = $_POST['Email'];
$Password = $_POST['Password'];
$Password = hash('sha256', $Password);

$ConfirmUser = mysqli_query($Connection, "SELECT * FROM users WHERE 
    email='$Email' AND password='$Password'");

if (mysqli_num_rows($ConfirmUser) > 0) {
    $_SESSION['User'] = $Email;
    if (!empty($_POST["RememberMe"])) {
        setcookie('Email', $_POST['Email'], time() + (10 * 365 * 24 * 60 * 60), '/');
        setcookie("Password", $_POST['Password'], time() + (10 * 365 * 24 * 60 * 60), '/');
    } else {
        if (isset($_COOKIE['Email'])) {
            setcookie("Email", "", time() - 3600, "/");
        }
        if (isset($_COOKIE["Password"])) {
            setcookie("Password", "", time() - 3600, "/");
        }
    }
    header("location:..//views/home.php");
    exit;
} else {
    echo '
            <script>
                alert("Usuario no encontrado")
                window.location = "../index.php";
            </script>
        ';
    exit;
}
?>