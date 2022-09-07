<?php
$servername = "localhost";
$database = "a0714168_cars";
$username = "a0714168_cars";
$password = "12345";
$connect = mysqli_connect($servername, $username, $password, $database);
if (!$connect) {
    die("Connection failed: " . mysqli_connect_error());
}
?>
