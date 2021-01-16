function myFunction(){
	var element=document.getElementById('a1');
	element.classList.toggle('chess-field-marked');
}

var chessboard;

chessboard =	[[	'bR',	'bN',	'bB',	'bQ',	'bK',	'bB',	'bN',	'bR'],
				 [	'bP',	'bP',	'bP',	'bP',	'bP',	'bP',	'bP',	'bP'],
				 [	null,	null,	null,	null,	null,	null,	null,	null],
				 [	null,	null,	null,	null,	null,	null,	null,	null],
				 [	null,	null,	null,	null,	null,	null,	null,	null],
				 [	null,	null,	null,	null,	null,	null,	null,	null],
				 [	'wP',	'wP',	'wP',	'wP',	'wP',	'wP',	'wP',	'wP'],
				 [	'wR',	'wN',	'wB',	'wQ',	'wK',	'wB',	'wN',	'wR']];


console.log(chessboard);


function zaznaczenie(e){	//funkcja zaznaczająca pole szachowe
	var el;
	
	el=e.target;	//pobranie węzła obiektu zdarzenia
	
	if(el.hasAttribute('class')){						//czy kliknięto diva (a nie obszar img)?
		el.classList.toggle('chess-field-marked');
	}
	else{
		el=el.parentNode;								//jeśli kliknięto obszar img to węzłem obiektu zdarzenia jest rodzic (div)
		el.classList.toggle('chess-field-marked');
	}
}

var pole=document.getElementsByClassName('chess-field');

for(let i=0; i<64;i++){
	pole[i].addEventListener('click', zaznaczenie, true);}




