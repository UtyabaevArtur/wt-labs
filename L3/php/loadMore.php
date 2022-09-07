<?php

require_once('connect.php');

$kol = $_POST['kol'];
$tek = $_POST['tek'];

$car = mysqli_query($connect, "SELECT * FROM `car`");
$car = mysqli_fetch_all($car);

if ($tek < 20) {
      for ($i = $tek; $i < ($tek + $kol); $i++) {
            $message[$i] = array(
                  'id_car' => $car[$i][0],
                  'car_img' => $car[$i][1],
                  'name_car' => $car[$i][2],
                  'car_price' => $car[$i][4]
            );
      }
      echo json_encode($message);
} else {
      return false;
}
