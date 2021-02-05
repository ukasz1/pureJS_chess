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
 	var taken;
	var given
	
	var rowFirst;
	var columnFirst;

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

function markingFirst(e){	
	
	
	var el = funcTarget(e);   
	console.log('Przed' + el);
	
	
	coloring(el);
	
	e.preventDefault();
	
	rowFirst = el.id[6];
	columnFirst = el.id[7];
	
	taken=chessboard[rowFirst][columnFirst];
}

function markingSecond(e){	
	
	
	var el = funcTarget(e);   
	
	coloring(el);
	
	chessboard[el.id[6]][el.id[7]]=taken;
	chessboard[rowFirst][columnFirst]=null;
	
	console.log(chessboard);
	
}




function checkingHighlights(){
	var highlightsNo=0;
	var highlightCoordinates = [];
	
	var pole=document.getElementsByClassName('chess-field');
	for(let i=0; i<64; i++){
		if(pole[i].className.length>18){
			highlightsNo++;
			
			highlightCoordinates.push(highlightsNo);
			highlightCoordinates.push(pole[i].id[0]);
			highlightCoordinates.push(pole[i].id[1]);
		}	
		
		
		
		
		
		
	}
	
	return highlightCoordinates;
}


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

{
var a =5;



{
	
}
}