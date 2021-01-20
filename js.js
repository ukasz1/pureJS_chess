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

var clickAddress;
var secondClick;
var clickNo=0;			//numer kliknięcia: 0 - pierwsze, 1 - drugie
var selectedChessPiece;	//przenoszona figura
var i1, j1, i2, j2;

var clickAddressFrom;
var clickAddressTo;

function marking(e){	//funkcja zaznaczająca pole szachowe
	
	
	var el;
	
	el=e.target;	//pobranie węzła obiektu zdarzenia
	
	if(el.hasAttribute('class')){						//czy kliknięto diva (a nie obszar img)?
	}
	else{
		el=el.parentNode;								//jeśli kliknięto obszar img to węzłem obiektu zdarzenia jest rodzic (div)
	}
	
	
/*	var chessFieldColor;
	chessFieldColor=el.className[17];
	
	if(chessFieldColor==='2'){							// color1 czy color2?
		el.classList.toggle('chess-field-marked-green');
	}
	else{
		el.classList.toggle('chess-field-marked-white');
	}
*/	
	if(clickNo%2==0){
		/*
			KLIKNIĘCIE PIERWSZEGO POLA
		*/
		
		clickAddress=el.id;
		
		console.log('clickAddress: '+ clickAddress);
		console.log('clickNo: ' + clickNo);
		
		var iIndex=clickAddress.charCodeAt(0);	//dekodowanie adresu szachowego celem pobrania indexów
		var jIndex=clickAddress.charCodeAt(1);
		
		i1=0;
		
		do{
			if(56-i1!=jIndex)	//56 - kod ASCII dla znaku '0'
				i1++;
			else
				break;
		} while(true);
		
		j1=0;
		
		do{
			if(j1+97!=iIndex)	//97 - kod ASCII dla znaku 'a'
				j1++;
			else
				break;
		} while(true);
		
		if(chessboard[i1][j1]!=null){
			selectedChessPiece=chessboard[i1][j1];	//pobranie figury
			clickNo++;								//kliknięcie zakończone sukcesem
			console.log('Pierwszy klik OK');
		}
		else{
			console.log('Pierwszy klik ERROR');
		}

		//chessboard[i][j]=null;	//sprawdzenie
				
	}
	else{
		/*
			KLIKNIĘCIE DRUGIEGO POLA
		*/
		
		clickAddress=el.id;
		
		console.log('clickAddress: '+ clickAddress);
		console.log('clickNo: ' + clickNo);

		
		iIndex=clickAddress.charCodeAt(0);
		jIndex=clickAddress.charCodeAt(1);
		
		i2=0;
		
		do{
			if(56-i2!=jIndex)	//56 - kod ASCII dla znaku '0'
				i2++;
			else
				break;
		} while(true);
		
		j2=0;
		
		do{
			if(j2+97!=iIndex)	//97 - kod ASCII dla znaku 'a'
				j2++;
			else
				break;
		} while(true);
		
		if(chessboard[i2][j2]==null){
			chessboard[i2][j2]=selectedChessPiece;
			chessboard[i1][j1]=null;
			clickNo++;
			console.log('Drugi klik OK');
			
			/*
			Ponowne zakodowanie indeksów na adresy i aktualizacja drzewa DOM (widoku szachownicy)
			*/
			
		}
		else{
			console.log('Drugi klik ERROR');
			clickNo--;
		}
		
		// 1. Czy wybrane pole nie jest zajęte przez figurę tego samego gracza?
		// 2. Czy wybrane pole jest osiągalne dla zaznaczonej figury?
		// 3. Czy na drodze figury nie stoi inna figura? (nie dotyczy skoczka)
		
		
		
	}
	console.log(chessboard);
	
}

var pole=document.getElementsByClassName('chess-field');

for(let i=0; i<64;i++){
	pole[i].addEventListener('click', marking, true);}






