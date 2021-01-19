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

var firstClick;
var secondClick;
var clickNo=-1;

function marking(e){	//funkcja zaznaczająca pole szachowe
	
	clickNo++;
	var el;
	
	el=e.target;	//pobranie węzła obiektu zdarzenia
	
	if(el.hasAttribute('class')){						//czy kliknięto diva (a nie obszar img)?
	}
	else{
		el=el.parentNode;								//jeśli kliknięto obszar img to węzłem obiektu zdarzenia jest rodzic (div)
	}
	
	
	var chessFieldColor;
	chessFieldColor=el.className[17];
	
	if(chessFieldColor==='2'){							// color1 czy color2?
		el.classList.toggle('chess-field-marked-green');
	}
	else{
		el.classList.toggle('chess-field-marked-white');
	}
	
	if(clickNo%2==0){		//kliknięcie pierwszego pola
		firstClick=el.id;
		
		console.log(firstClick);
		console.log(clickNo);
		
		var iIndex=firstClick.charCodeAt(0);	//dekodowanie adresu szachowego celem pobrania indexów
		var jIndex=firstClick.charCodeAt(1);
		
		let i=0;
		
		do{
			if(56-i!=jIndex)	//56 - kod ASCII dla znaku '0'
				i++;
			else
				break;
		} while(true);
		
		let j=0;
		
		do{
			if(j+97!=iIndex)	//97 - kod ASCII dla znaku 'a'
				j++;
			else
				break;
		} while(true);
		
		chessboard[i][j]=null;	//sprawdzenie
				
	}
	else{
		/*
		
		//KLIKNIĘCIE DRUGIEGO POLA
		
		*/
	}
	console.log(chessboard);
	
}

var pole=document.getElementsByClassName('chess-field');

for(let i=0; i<64;i++){
	pole[i].addEventListener('click', marking, true);}






