<?php
	require_once('connect.php');
	$id = $_POST['id'];

	$info = mysqli_query($connect, "SELECT * FROM `comm` WHERE `car_id` = '$id'");
	$comment = array();

	$i = 0;
	foreach ($info as $comm) {
		$comment[$i] = $comm;
		$i++;
 	}
	echo json_encode($comment);
?>