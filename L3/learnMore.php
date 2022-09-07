<?
require_once('php/connect.php');
$id = $_GET['id'];
$content = mysqli_query($connect, "SELECT * FROM `car` WHERE `id_car` = '$id'");
$content = mysqli_fetch_assoc($content);
?>
<!DOCTYPE html>
<html lang="ru">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>ROOTS</title>
	<link rel="stylesheet" type="text/css" href="css/style.css">
</head>

<body>
	<header class="header">
		<div class="content">
			<div class="logo__place">
				<a href="index.html">
					<img src="https://pixy.org/src/486/4860116.png" alt="logo">
				</a>
			</div>

			<div class="title">автомобили</div>
		</div>
	</header>

	<main class="main">
		<div class="content">
			<div class="car__learnMore__items">
				<div class="car__learnMore__img" style="background: url('<?= $content['img_car'] ?>') no-repeat;">
				</div>

				<div class="car__learnMore__name">
					<?= $content['name_car'] ?>
				</div>

				<div class="car__learnMore__title">
					Описание:
				</div>

				<div class="car__learnMore__text">
					<?= $content['text_car'] ?>
				</div>

				<div class="car__price bolder">
					<?= $content['car_price'] ?>
				</div>
			</div>

			<div class="learnMore__form">
				<div class="learnMore__form__title">
					Оставить комментарий
				</div>
				<form name="learnMore__send__comment" class="learnMore__send__comment">
					<input type="text" name="id" hidden="" value="<?= $id ?>" />

					<input id="name" type="text" name="name" placeholder="Имя пользователя (свыше 6 знаков)">

					<input id="email" type="email" name="email" placeholder="Email (свыше 6 знаков)">

					<textarea id="text" placeholder="Комментарий."></textarea>

					<input type="submit" name="submit" id="btn__submit">
				</form>
			</div>

			<div class="comments__title">
			</div>

			<div id="learnMore__place__for__comments">
			</div>
		</div>
	</main>

	<script src="js/jquery-3.6.0.js"></script>
	<script src="js/comments.js"></script>
</body>

</html>