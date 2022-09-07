$(document).ready(function () {
	(function () {
		var tek = document.getElementById('car__place').getElementsByClassName('car').length;
		$.post("php/loadMore.php", ({ kol: 8, tek: 0 }), successLoad);;
	}());


	$("#button__more").click(load);

	function load() {
		var tek = document.getElementById('car__place').getElementsByClassName('car').length;
		$.post("php/loadMore.php", ({ kol: 4, tek: tek }), successLoad);
	}
});


function successLoad(data) {
	data = JSON.parse(data);
	for (var i in data) {
		let car =
			`<div class="car">
		<div class="car__items">
		<div class="car__img">
		<a href="learnMore.php?id=${data[i].id_car}">
		<img src="${data[i].car_img}">
		</a>
		</div>

		<div class="car__name">
		<a href="learnMore.php?id=${data[i].id_car}">
		${data[i].name_car}
		</a>
		</div>

		<div class="car__price">
		${data[i].car_price}
		</div>
		</div>
		</div>`;
		document.getElementById("car__place").insertAdjacentHTML('beforeend', car);
	}
}

