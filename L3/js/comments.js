$(document).ready(function (){
	const id = window.location.search.substring(4);
	$("#btn__submit").click(
		function(){
			var name = document.getElementById('name').value;
			var email = document.getElementById('email').value;
			var text = document.getElementById('text').value;

			addComment(name, email, text, id);
			return false; 
		});
	loadComm(id);
});
function successAdd(data){
	alert("Комментарий добавлен");
	document.learnMore__send__comment.reset();
	Clear();
	const id = window.location.search.substring(4);
	loadComm(id);
}

function addComment(name, email, text, id) {
	$.post("php/add_comm.php", ({name: name, email: email, text: text, id: id}), successAdd);
}

function loadComm(id) {
	$.post("php/load_comm.php", ({id: id}), succesessLoad);
}

function succesessLoad (data) {
	data = JSON.parse(data);
	console.log(data);
	for( let key in data){
		let comm = 
		`<div class="comment__items">
		<div class="comment__item__info">
		<div class="comment__info__img">
		<img src="https://ei.phncdn.com/pics/users/default/pornhub/(m=e8apG0y)(mh=tI1DfBCLHUL3V7xI)male.png">
		</div>

		<div class="comment__info__name">
		${data[key].name_comm}
		</div>

		<div class="comment__info__email">
		${data[key].email_comm}
		</div>
		</div>

		<div class="commetn__item__text">
		${data[key].text_comm}
		</div>
		</div>`;
		document.getElementById("learnMore__place__for__comments").insertAdjacentHTML('afterbegin', comm);
	}
	counter();
}


function counter(){
	let count = document.getElementById('learnMore__place__for__comments').getElementsByClassName('comment__items').length;
	let massage = `Все комментарии (${count})`;
	document.getElementsByClassName("comments__title")[0].insertAdjacentHTML('afterbegin', massage);
}

function Clear(){
	document.getElementById('learnMore__place__for__comments').innerHTML = '';
	document.getElementsByClassName("comments__title")[0].innerHTML = '';
}