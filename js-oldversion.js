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

var clickAddress;
var secondClick;
var clickNo=0;			//numer kliknięcia: 0 - pierwsze, 1 - drugie
var selectedChessPiece;	//przenoszona figura
var selectedChessImg;
var i1, j1, i2, j2;

var clickAddressFrom;
var clickAddressTo;

var shouldBeColor='w';	//kolor którego ruch jest oczekiwany; w - white, b - black
var previousColor;
var movesAllowedArray=[];
var moveFlag=false;


function marking(e){	//funkcja zaznaczająca pole szachowe
	
	
	var el;
	
	el=e.target;	//pobranie węzła obiektu zdarzenia
	
	if(el.hasAttribute('class')){						//czy kliknięto diva (a nie obszar img)?
	}
	else{
		el=el.parentNode;								//jeśli kliknięto obszar img to węzłem obiektu zdarzenia jest rodzic (div)
	}
	
	if(clickNo%2==0){
		/*
			KLIKNIĘCIE PIERWSZEGO POLA
		*/
		
		clickAddressFrom=el.id;
		
		console.log('clickAddressFrom: '+ clickAddressFrom);
				
		var iIndex=clickAddressFrom.charCodeAt(0);	//dekodowanie adresu szachowego celem pobrania indexów
		var jIndex=clickAddressFrom.charCodeAt(1);
		
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
		
		if(chessboard[i1][j1]==null){	//kliknięto puste pole
			console.clear();
			console.log('clickNo: ' + clickNo);
			console.log('Pierwszy klik');
			console.log('Error 0 - zaznaczono puste pole');
			console.log('==========================================');
			
		}
		
		else{
			if(chessboard[i1][j1][0]==shouldBeColor){//SUKCES
			
					console.clear
					
					movesAllowedArray=bishop(i1,j1,chessboard);

					
					selectedChessPiece=chessboard[i1][j1];	//pobranie figury
					clickNo++;								//kliknięcie zakończone sukcesem
					
					console.log('clickNo: ' + clickNo);
					console.log('Pierwszy klik OK - po funkcji');
					console.log('==========================================');
			}
			else{
				console.clear();
				console.log('clickNo: ' + clickNo);
				console.log('Pierwszy klik - błędny kolor');
				console.log('Error 1 - niewłaściwy gracz');
				console.log('==========================================');

			}
		}
		//chessboard[i][j]=null;	//sprawdzenie
				
	}
	else{
		/*
			KLIKNIĘCIE DRUGIEGO POLA
		*/
		
		// 1. Czy wybrane pole nie jest zajęte przez figurę tego samego gracza?
		
		
		
		// 2. Czy wybrane pole jest osiągalne dla zaznaczonej figury?
		// 3. Czy na drodze figury nie stoi inna figura? (nie dotyczy skoczka)
		
		clickAddressTo=el.id;
		
		console.log('clickAddressTo: '+ clickAddressTo);

		
		iIndex=clickAddressTo.charCodeAt(0);
		jIndex=clickAddressTo.charCodeAt(1);
		
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
		
		//jest i2, j2++
		
		//moveFlag=false;
		
		
		
		for(let i=0;i<movesAllowedArray.length;i++){
			
			if(movesAllowedArray[i][0]==i2 && movesAllowedArray[i][1]==j2){
				moveFlag=true;
				console.log(moveFlag);
				break;
			}
			moveFlag=false;
			
		}
		
		if((chessboard[i2][j2]==null || chessboard[i2][j2][0]!=shouldBeColor) && moveFlag==true){
			
			
			
			
			chessboard[i2][j2]=selectedChessPiece;
			chessboard[i1][j1]=null;
			moveFlag=false;
			
			if(shouldBeColor=='w'){	//zamiana aktywnego gracza, tj. oczekiwanego koloru do kliknięcia
				shouldBeColor='b';
			}
			else{
				shouldBeColor='w';
			}

			clickNo++;
			
			//console.clear();
			console.log('clickNo: ' + clickNo);
			console.log('Poprawny ruch');
			console.log('==========================================');
			
			/*
			Aktualizacja drzewa DOM
			*/
			
			selectedChessImg=document.getElementById(clickAddressFrom).innerHTML;
			
			document.getElementById(clickAddressFrom).innerHTML='';
			document.getElementById(clickAddressTo).innerHTML=selectedChessImg;
			
			
			
			//----
			
			
		}
		else{
			
			//console.clear();
			clickNo--;
			console.log('clickNo: ' + clickNo);
			console.log('Drugi klik');
			console.log('Error 2 - Nie można zbijać swoich figur!');
			
			console.log('==========================================');
		}
		

		
		
		
	}
	
 console.log(chessboard); 
}

var pole=document.getElementsByClassName('chess-field');

for(let i=0; i<64;i++){
	pole[i].addEventListener('click', marking, true);}
	
function rook(i1,j1,chessboard){
	var tab = [];
	
	//Sprawdzenie istnienia pól szachowych
	var mtr=1;
	console.log('Uruchomiona funkcja');
	
	while(i1+mtr<8){
		if(chessboard[i1+mtr][j1]==null){
			tab.push([i1+mtr,j1]);
		}
		else{
			console.log('Koniec funkcji');
			
			if(tab.length!=0){
			//	console.log('tab =');
			//	console.log(tab);
			}
			else
				console.log('Brak ruchów ruchów w dół');
			
			break;
		}
		mtr++;
	}
	
	mtr=1;
	
	while(i1-mtr>=0){
		if(chessboard[i1-mtr][j1]==null){
			tab.push([i1-mtr,j1]);
		}
		else{

			
			if(tab.length!=0){

			}
			else
				console.log('Brak ruchów w górę');
			
			break;
		}
		mtr++;
	}
	
	mtr=1;
	
	while(j1+mtr<8){
		if(chessboard[i1][j1+mtr]==null){
			tab.push([i1,j1+mtr]);
		}
		else{

			
			if(tab.length!=0){

			}
			else
				console.log('Brak ruchów w prawo');
			
			break;
		}
		mtr++;
	}
	
	mtr=1;
	
	while(j1-mtr>=0){
		if(chessboard[i1][j1-mtr]==null){
			tab.push([i1,j1-mtr]);
		}
		else{

			
			if(tab.length!=0){

			}
			else
				console.log('Brak ruchów w lewo');
			
			break;
		}
		mtr++;
	}
	

	//console.log(tab);
	return tab;
} 
//-----------------------------------------------------------------------------------------------------
function bishop(i1,j1,chessboard){
	var tab = [];
	
	//Sprawdzenie istnienia pól szachowych
	var mtr=1;
	
	console.log('Prawo-dół:');
	while(i1+mtr<8){
		
		if(chessboard[i1+mtr][j1+mtr]==null && j1+mtr<8){
			tab.push([i1+mtr,j1+mtr]);
		}
		else{	
			if(tab.length!=0){}
			else{
				console.log('Length=0:'); // do usunięcia w obu funkcjach
			}
			
			break;
		}
		mtr++;
	}
	
	mtr=1;
	
	while(i1+mtr<8){
		
		if(chessboard[i1+mtr][j1-mtr]==null && j1-mtr>=0){
			tab.push([i1+mtr,j1-mtr]);
		}
		else{

			
			if(tab.length!=0){}
			else{
				console.log('Length=0:');
			}
			
			break;
		}
		mtr++;
	}
	
	
	mtr=1;
	
	while(i1-mtr>=0){
		
		if(chessboard[i1-mtr][j1+mtr]==null && j1+mtr<8){
			tab.push([i1-mtr,j1+mtr]);

		}
		else{

			
			if(tab.length!=0){}
			else{
				console.log('Length=0:');
			}
			
			break;
		}
		mtr++;
	}
	
	
	mtr=1;
	
	console.log('Lewo-góra:');
	while(i1-mtr>=0){
		if(chessboard[i1-mtr][j1-mtr]==null && j1-mtr>=0){
			tab.push([i1-mtr,j1-mtr]);
		}
		else{		
			if(tab.length!=0){}
			else{
				console.log('Length=0:');
			}
				
			break;
		}
		mtr++;
	}
	

	//console.log(tab);
	
	return tab;
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



