var chessboard;

chessboard =	[[	'bR0',	'bN',	'bB',	'bQ',	'bK0',	'bB',	'bN',	'bR0'],
				 [	'bR',	'bR',	'bR',	'bR',	'bR',	'bR',	'bR',	'bR'],
				 [	null,	null,	null,	null,	null,	null,	null,	null],
				 [	null,	null,	null,	null,	null,	null,	null,	null],
				 [	null,	null,	null,	null,	null,	null,	null,	null],
				 [	null,	null,	null,	null,	null,	null,	null,	null],
				 [	'wR0',	'wR0',	'wR0',	'wR',	'wR',	'wR',	'wR',	'wR'],
				 [	'wR0',	'wN',	'wB',	'wQ',	'wK0',	'wB',	'wN',	'wR0']];
				 


				 


 console.log(chessboard);
 	var taken=undefined;
	var given;
	
	var pieceAddressI=null;
	var pieceAddressJ=null;
	
	var prevoiusPieceAddressI=null;
	var prevoiusPieceAddressJ=null;
	
	var shouldBeColor='w';	//flaga aktywnego gracza
	
	var movesHistory = [];	// zawiera historię 4 ostatnich ruchów (ich indexów)
	var el1, el2; 			// obiekty zdarzeń kliknięć
	
	var selectedChessImg;

	var error=true;	//czy wystąpił błąd?
	
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

//---------------------------------------------FUNKCJA ZAZNACZAJĄCA POLE SZACHOWE, pobiera figurę-------------

function markingFirst(e){	
	error=false;
	
	var el = funcTarget(e);   
	el1=el;
	
	e.preventDefault();
	
	pieceAddressI = el.id[6];
	pieceAddressJ = el.id[7];
	
	if(chessboard[pieceAddressI][pieceAddressJ]==null || chessboard[pieceAddressI][pieceAddressJ][0]!=shouldBeColor){	//zły kolor gracza
		console.log('Error 1: Nie wybrano właściwej figury!');
		error=true;
	}
	else{
		
		movesHistory.push(pieceAddressI);	//zapamiętanie w historii adresu pierwszego ruchu
		movesHistory.push(pieceAddressJ);
		
		taken=chessboard[pieceAddressI][pieceAddressJ];

		
		error=false;	// figurę pobrano poprawnie
	}
}
//--------------------------------------------FUNKCJA OPUSZCZAJĄCA FIGURĘ----------------------------------

function markingSecond(e){	
	
	if(error==true){	// pierwsze kliknięcie niepoprawne
		return 0;		// przerwanie skryptu do czasu właściwego pobrania figury
	}
	
	var el = funcTarget(e);
	el2=el;
	checkingHighlights();	//usunięcie poprzedniego podświetlenia ruchu
	
	
	
//POPRAWNY RUCH
	if(isMovePossible(el1, el2, taken, chessboard)){	//tu należy sprawdzić dopuszczalność ruchu za pomocą funkcji isMovePossible();
	
		if(shouldBeColor=='w'){		//zamiana aktywnego gracza, tj. oczekiwanego koloru do kliknięcia dla następnego ruchu
			shouldBeColor='b';
		}
		else{
			shouldBeColor='w';
		}
//----------------
		
		
		
		movesHistory.push(el.id[6]);	//zapamiętanie w historii adresu drugiego ruchu
		movesHistory.push(el.id[7]);
		
		/*console.log('Historia ruchów: ' + movesHistory);*/
		coloring(el1);
		coloring(el2);
		
		chessboard[el.id[6]][el.id[7]]=taken;				//zmiana stanu pamięci szachownicy
		chessboard[pieceAddressI][pieceAddressJ]=null;
		
		selectedChessImg = document.getElementById(el1.id).innerHTML;	//aktualizacja drzewa DOM i grafiki
		document.getElementById(el1.id).innerHTML='';
		document.getElementById(el2.id).innerHTML=selectedChessImg;
		
		
		console.log(chessboard);
		
		//error=true;
	}
	
	else{
		
	}
	
	
}



//------------------------------FUNKCJA KASUJĄCA PODŚWIETLENIE POPRZEDNIEGO RUCHU--------------------------
function checkingHighlights(){
	
	var pole=document.getElementsByClassName('chess-field');
	for(let i=0; i<64; i++){
		if(pole[i].className.length>18){
			coloring(pole[i]);
		}		
	}
}



//----------------------------------------------------------------------------------------------
var pole=document.getElementsByClassName('chess-field');

for(let i=0; i<64;i++){
	pole[i].addEventListener('mousedown', function(e){markingFirst(e);}, false);
	pole[i].addEventListener('mouseup', function(e){markingSecond(e);}, false);
	}

//---------------------------- KOLOROWANIE PÓL --------------------------------------------------
function coloring(arg){
	var chessFieldColor;
	chessFieldColor=arg.className[17];
	
	
	if(chessFieldColor==='2'){								// color1 czy color2?
		arg.classList.toggle('chess-field-marked-green');
	}
	else{
		arg.classList.toggle('chess-field-marked-white');
	}
}












