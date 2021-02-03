var chessboard;

chessboard =	[[	'bR',	'bN',	'bB',	'bQ',	'bK',	'bB',	'bN',	'bR'],
				 [	'bP',	'bP',	'bP',	'bP',	'bP',	'bP',	'bP',	'bP'],
				 [	null,	null,	null,	null,	null,	null,	null,	null],
				 [	null,	null,	null,	null,	null,	null,	null,	null],
				 [	null,	null,	null,	null,	null,	null,	null,	null],
				 [	null,	null,	null,	null,	null,	null,	null,	null],
				 [	'wP',	'wP',	'wP',	'wP',	'wP',	'wP',	'wP',	'wP'],
				 [	'wR',	'wN',	'wB',	'wQ',	'wK',	'wB',	'wN',	'wR']];
				 


				 


// console.log(chessboard);
//-------------------------------------------FUNKCJA PODŚWIETLAJĄCA POLE SZACHOWE---------------------------------------------------------------------------------------------

var clickNo=0;			//numer kliknięcia: 0 - pierwsze, 1 - drugie

function funcTarget(e){
	
	var el;
	el=e.target;						//pobranie węzła obiektu zdarzenia
	
	if(el.hasAttribute('class')){}		//czy kliknięto diva (a nie obszar img)?
	else{
		el=el.parentNode;				//jeśli kliknięto obszar img to węzłem obiektu zdarzenia jest rodzic (div)
	}
	
	return el;
}

//---------------------------------------------FUNKCJA ZAZNACZAJĄCA POLE SZACHOWE---------------------------------------------------------------------------------------------

function marking1(e){	
	
	
	var el = funcTarget(e); 
	
	var chessFieldColor;
	chessFieldColor=el.className[17];
	
	if(chessFieldColor==='2'){							// color1 czy color2?
		el.classList.toggle('chess-field-marked-green');
	}
	else{
		el.classList.toggle('chess-field-marked-white');
	}
	
	if(clickNo%2==0){
		/*
			KLIKNIĘCIE PIERWSZEGO POLA
		*/
		
		
				
	}
	
	else{
		/*
			KLIKNIĘCIE DRUGIEGO POLA
		*/
	
	
	}
	
}

var pole=document.getElementsByClassName('chess-field');

for(let i=0; i<64;i++){
	pole[i].addEventListener('click', marking1, true);	
	}


