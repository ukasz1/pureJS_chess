//---------------------------SPRAWDZANIE DOPUSZCZALNOŚCI RUCHU----------------------------------

// Funkcja zwraca true, jeśli końcowe pole jest możliwe do zajęcia; false - jeśli nie.

function isMovePossible(el1_arg, el2_arg, taken_arg, chessboard_arg){	

	var movesAllowedArray = [];
	
	var iAddress1 = el1.id[6];
	var jAddress1 = el1.id[7];
	var iAddress2 = el2.id[6];
	var jAddress2 = el2.id[7];
	
	var color = taken_arg[0]; 		//kolor pobranej figury

	
	
	var chessPiece = taken_arg[1];	//rodzaj bierki
		
	switch(chessPiece){
		case 'P': 					//pion - Pawn
			if(color=='w')
				movesAllowedArray = pawnW(iAddress1, jAddress1, chessboard);
			else
				movesAllowedArray = pawnB(iAddress1, jAddress1, chessboard);
			break;
		case 'N':		//skoczek - kNight
			break;
		case 'B':		//goniec - Bishop
			movesAllowedArray = bishop(iAddress1, jAddress1, chessboard);
			break;
		case 'Q':		//hetman - Queen
			movesAllowedArray = queen(iAddress1, jAddress1, chessboard);
			break;
		case 'K':		//król - King
			movesAllowedArray = king(iAddress1, jAddress1, chessboard);
			break;
		case 'R':		//wieża - Rook
			movesAllowedArray = rook(iAddress1, jAddress1, chessboard);
			break;
	}
	
	for(let i=0; i<movesAllowedArray.length; i++){
		if(movesAllowedArray[i][0]==iAddress2 && movesAllowedArray[i][1]==jAddress2){
			console.log(movesAllowedArray);
			return true;
		}
	}
	
	return false;
}

//----------------------------------- RUCH PIONA BIAŁEGO ---------------------------------------
function pawnW(i1, j1, chessboard){
	
	i1=Number(i1);
	j1=Number(j1);
	
	var tab = [];
	
	if(i1==0)
		return tab;
	if(i1<6){
		if(chessboard[i1-1][j1]==null){
			tab.push([i1-1,j1]);
		}
	}
	else
		if(chessboard[i1-1][j1]==null){
			tab.push([i1-1,j1]);
			
			if(chessboard[i1-2][j1]==null){
				tab.push([i1-2,j1]);
			}
		}
	console.log(tab);
	return tab;
}

//----------------------------------- RUCH PIONA CZARNEGO ---------------------------------------
function pawnB(i1, j1, chessboard){
	
	i1=Number(i1);
	j1=Number(j1);
	
	var tab = [];
	
	if(i1==7)
		return tab;
	if(i1>1){
		if(chessboard[i1+1][j1]==null){
			tab.push([i1+1,j1]);
		}
	}
	else
		if(chessboard[i1+1][j1]==null){
			tab.push([i1+1,j1]);
			
			if(chessboard[i1+2][j1]==null){
				tab.push([i1+2,j1]);
			}
		}
	console.log(tab);
	return tab;
}


//----------------------------------- RUCHY WIEŻY ----------------------------------------------

function rook(i1,j1,chessboard){
	var tab = [];
	
	//Sprawdzenie istnienia pól szachowych
	var mtr=1;
	console.log('Przed pierwszym whilem ' + i1);
	
	i1=Number(i1);
	j1=Number(j1);
	
	while(i1+mtr<8){	//SPRAWDZANIE MIEJSCA W DÓŁ
	
		console.log('PIERWSZY WHILE ' + i1);
		
		if(chessboard[i1+mtr][j1]==null){
			console.log('While1 - if');
			tab.push([i1+mtr,j1]);
		}
		else{
			console.log('While1 - else');
			
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
	console.log('Przed drugim whilem ' + i1);
	
	while(i1-mtr>=0){	//SPRAWDZANIE MIEJSCA W GÓRĘ
		console.log('DRUGI WHILE' + i1);
		if(chessboard[i1-mtr][j1]==null){
			console.log('While2 - if');
			tab.push([i1-mtr,j1]);
		}
		else{
			console.log('While2 - else');
			
			if(tab.length!=0){

			}
			else
				console.log('Brak ruchów w górę');
			
			break;
		}
		mtr++;
	}
	
	mtr=1;
	console.log('Przed trzecim whilem ' + i1);
	
	while(j1+mtr<8){	//SPRAWDANIE MIEJSCA W PRAWO
		console.log('TRZECI WHILE' + i1);
		if(chessboard[i1][j1+mtr]==null){
			console.log('While3 - if');
			tab.push([i1,j1+mtr]);
		}
		else{
			console.log('While3 - else');
			
			if(tab.length!=0){

			}
			else
				console.log('Brak ruchów w prawo');
			
			break;
		}
		mtr++;
	}
	
	mtr=1;
	console.log('Przed czwartym whilem ' + i1);
	
	while(j1-mtr>=0){		//SPRAWDZANIE MIEJSCA W LEWO
		console.log('CZWARTY WHILE' + i1);
		if(chessboard[i1][j1-mtr]==null){
			console.log('While4 - if');
			tab.push([i1,j1-mtr]);
		}
		else{

			console.log('While4 - else');
			if(tab.length!=0){

			}
			else
				console.log('Brak ruchów w lewo');
			
			break;
		}
		mtr++;
	}
	
	console.log('i1 koniec= ' + i1);
	console.log(tab);
	return tab;
} 

// -------------------------------------------------------------------------------------
// ---------------------------------------RUCHY GOŃCA ----------------------------------
// -------------------------------------------------------------------------------------

function bishop(i1,j1,chessboard){
	var tab = [];
	
	//Sprawdzenie istnienia pól szachowych
	var mtr=1;
	
	i1 = Number(i1);
	j1 = Number(j1);
	
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
	

	console.log(tab);
	
	return tab;
}

// -------------------------------------------------------------------------------------
// ---------------------------------------RUCHY HETMANA --------------------------------
// -------------------------------------------------------------------------------------

function queen(i1,j1,chessboard){
	
	var tab = [];
	var tabBishop = [];
	var tabRook = [];
	
	tabBishop = bishop(i1, j1, chessboard);
	tabRook = rook(i1, j1, chessboard);
	
	tab = tabBishop.concat(tabRook);
	
	console.log(tab);
	
	return tab;
}

// -------------------------------------------------------------------------------------
// ---------------------------------------RUCHY KRÓLA ----------------------------------
// -------------------------------------------------------------------------------------

function king(i1,j1,chessboard){
	
	var tab = [];
	
	i1 = Number(i1);
	j1 = Number(j1);
	
	if(i1-1>=0 && j1-1>=0)
		if(chessboard[i1-1][j1-1]==null)
			tab.push([i1-1, j1-1]);
	
	if(i1-1>=0 && j1>=0)
		if(chessboard[i1-1][j1]==null)
			tab.push([i1-1,j1]);
	
	if(i1-1>=0 && j1+1<=7)
		if(chessboard[i1-1][j1+1]==null)
			tab.push([i1-1,j1+1]);
	
	if(i1>=0 && j1-1>=0)						//pierwszy warunek jest zawsze spełniony, da się zopymalizować?
		if(chessboard[i1][j1-1]==null)
			tab.push([i1,j1-1]);
	
	if(i1<=7 && j1+1<=7)
		if(chessboard[i1][j1+1]==null)
			tab.push([i1,j1+1]);
	
	if(i1+1<=7 && j1-1>=0)
		if(chessboard[i1+1][j1-1]==null)
			tab.push([i1+1,j1-1]);
	
	if(i1+1<=7 && j1<=7)
		if(chessboard[i1+1][j1]==null)
			tab.push([i1+1, j1]);
	
	if(i1+1<=7 && j1+1<=7)
		if(chessboard[i1+1][j1+1]==null)
			tab.push([i1+1,j1+1]);
	
	console.log('Król:');
	console.log(tab);
	return tab;
}