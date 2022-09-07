<?php
	require_once('connect.php');
	$id = $_POST['id'];
	$name = $_POST['name'];
	$email = $_POST['email'];
	$text = $_POST['text'];

	$sqlAdd = "INSERT INTO comm (`name_comm`, `email_comm`, `text_comm`, `car_id`) VALUES ('$name', '$email', '$text', '$id')";
	mysqli_query($connect, $sqlAdd);
?>