let totalcount = 9;
initVars(totalcount);
$("#txt").click(function () {
	totalcount = 9;
	initVars(totalcount);
	printFields(totalcount, fieldSize);
	newGame();
});
$("#fxf").click(function () {
	totalcount = 16;
	initVars(totalcount);
	printFields(totalcount, fieldSize);
	newGame();
});

function initVars(totalcount) {
	switch (totalcount) {
		case 9:
			fieldSize = "120px";
			comb = [
				[0, 1, 2],
				[3, 4, 5],
				[6, 7, 8],
				[0, 3, 6],
				[1, 4, 7],
				[2, 5, 8],
				[0, 4, 8],
				[2, 4, 6]
			];
			circle = `<svg class="circle">
		<circle r="45" cx="58" cy="58" stroke="rgba(255, 255, 255, 0.8)" stroke-width="10" fill="none" stroke-linecap="round" />
	</svg>`;
			cross = `<svg class="cross">
		<line class="first" x1="15" y1="15" x2="100" y2="100" stroke="rgba(255, 255, 255, 0.8)" stroke-width="10" stroke-linecap="round" />
		<line class="second" x1="100" y1="15" x2="15" y2="100" stroke="rgba(255, 255, 255, 0.8)" stroke-width="10" stroke-linecap="round" />
	</svg>`;
			break;
		case 16:
			fieldSize = "90px";
			comb = [
				[0, 1, 2, 3],
				[4, 5, 6, 7],
				[8, 9, 10, 11],
				[12, 13, 14, 15],
				[0, 4, 8, 12],
				[1, 5, 9, 13],
				[2, 6, 10, 14],
				[3, 7, 11, 15],
				[0, 5, 10, 15],
				[3, 6, 10, 12]
			];
			circle = `<svg class="circle">
		<circle r="30" cx="43" cy="43" stroke="rgba(255, 255, 255, 0.8)" stroke-width="10" fill="none" stroke-linecap="round" />
	</svg>`;
			cross = `<svg class="cross">
		<line class="first" x1="15" y1="15" x2="70" y2="70" stroke="rgba(255, 255, 255, 0.8)" stroke-width="10" stroke-linecap="round" />
		<line class="second" x1="70" y1="15" x2="15" y2="70" stroke="rgba(255, 255, 255, 0.8)" stroke-width="10" stroke-linecap="round" />
	</svg>`;
			break;
	}
}

let game = $('.game');
printFields(totalcount, fieldSize);

let res = $('.res'),
	restartGame = $('.new-game'),
	reset = $(".reset"),
	xScorePlace = $("#x__score"),
	oScorePlace = $("#o__score"),
	fields = $('.field'),
	step = false,
	count = 0,
	xScore = 0,
	oScore = 0;
let circleAudio = new Audio('audio/circle.mp3');
let crossAudio = new Audio('audio/cross.mp3');

function printFields(totalcount, fieldSize) {
	game.empty();
	for (let i = 0; i < totalcount; i++) {
		$('<div class="field"></div>').appendTo('.game').css({ 'width': fieldSize, 'height': fieldSize });
	}
}

function stepCross(target) {
	if (target.classList.contains('o') || target.classList.contains('x') || target.classList.contains('circle') || target.classList.contains('cross')) {
		return false;
	} else {
		step = !step;
		target.innerHTML = cross;
		target.classList.add('x');
		crossAudio.play();
		count++;
	}
}
function stepZero(target) {
	if (target.classList.contains('x') || target.classList.contains('o') || target.classList.contains('cross') || target.classList.contains('circle')) {
		return false;
	} else {
		step = !step;
		target.innerHTML = circle;
		target.classList.add('o');
		circleAudio.play();
		count++;
	}
}

function init(e) {
	if (!step) {
		stepCross(e.target);
	}
	else {
		stepZero(e.target);
	}
	win(totalcount);
}

function newGame() {
	game.off('click', init);
	count = 0;
	step = false;
	res.empty();
	fields.each(function () {
		$(this).empty();
		$(this).removeClass('x o active');
	});
	game.on('click', init);
}

function win(totalcount) {
	fields = $('.field');
	switch (totalcount) {
		case (9):
			for (let i = 0; i < comb.length; i++) {
				if (fields[comb[i][0]].classList.contains('x') &&
					fields[comb[i][1]].classList.contains('x') &&
					fields[comb[i][2]].classList.contains('x')) {
					setTimeout(() => {
						fields[comb[i][0]].classList.add('active');
						fields[comb[i][1]].classList.add('active');
						fields[comb[i][2]].classList.add('active');
						res.text('Выиграли X');
						xScore++;
						xScorePlace.text(xScore);
					}, 1500);
					game.off('click', init);
				}

				else if (fields[comb[i][0]].classList.contains('o') &&
					fields[comb[i][1]].classList.contains('o') &&
					fields[comb[i][2]].classList.contains('o')) {
					setTimeout(() => {
						fields[comb[i][0]].classList.add('active');
						fields[comb[i][1]].classList.add('active');
						fields[comb[i][2]].classList.add('active');
						oScore++;
						oScorePlace.text(oScore);
						res.text('Выиграли 0');
					}, 1500);
					game.off('click', init);
				}

				else if (count == totalcount) {
					res.text('Ничья');
					game.off('click', init);
				}
			}
			break;
		case (16):
			for (let i = 0; i < comb.length; i++) {
				if (fields[comb[i][0]].classList.contains('x') &&
					fields[comb[i][1]].classList.contains('x') &&
					fields[comb[i][2]].classList.contains('x') &&
					fields[comb[i][3]].classList.contains('x')) {
					setTimeout(() => {
						fields[comb[i][0]].classList.add('active');
						fields[comb[i][1]].classList.add('active');
						fields[comb[i][2]].classList.add('active');
						fields[comb[i][3]].classList.add('active');
						res.text('Выиграли X');
						xScore++;
						xScorePlace.text(xScore);
					}, 1500);
					game.off('click', init);
				}

				else if (fields[comb[i][0]].classList.contains('o') &&
					fields[comb[i][1]].classList.contains('o') &&
					fields[comb[i][2]].classList.contains('o') &&
					fields[comb[i][3]].classList.contains('o')) {
					setTimeout(() => {
						fields[comb[i][0]].classList.add('active');
						fields[comb[i][1]].classList.add('active');
						fields[comb[i][2]].classList.add('active');
						fields[comb[i][3]].classList.add('active');
						oScore++;
						oScorePlace.text(oScore);
						res.text('Выиграли 0');
					}, 1500);
					game.off('click', init);
				}

				else if (count == totalcount) {
					res.text('Ничья');
					game.off('click', init);
				}
			}
			break;
	}
}
reset.on('click', function () {
	xScorePlace.text('0');
	oScorePlace.text('0');
	xScore = 0;
	oScore = 0;
	newGame();
});

$(".settings").click(function () {
	$(".change__size").toggleClass("_active");
});
restartGame.on('click', newGame);
game.on('click', init);