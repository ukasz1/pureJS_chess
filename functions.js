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
				movesAllowedArray = pawnW(iAddress1, jAddress1, chessboard, color);
			else
				movesAllowedArray = pawnB(iAddress1, jAddress1, chessboard, color);
			break;
		case 'N':		//skoczek - kNight
			movesAllowedArray = knight(iAddress1, jAddress1, chessboard, color);
			break;
		case 'B':		//goniec - Bishop
			movesAllowedArray = bishop(iAddress1, jAddress1, chessboard, color);
			break;
		case 'Q':		//hetman - Queen
			movesAllowedArray = queen(iAddress1, jAddress1, chessboard, color);
			break;
		case 'K':		//król - King
			movesAllowedArray = king(iAddress1, jAddress1, chessboard, color);
			break;
		case 'R':		//wieża - Rook
			movesAllowedArray = rook(iAddress1, jAddress1, chessboard, color);
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

//------------------------------- SPRAWDZENIE KOLORU PRZECIWNIKA -------------------------------

function func_OpponentsColor(l_color){
	if(l_color=='w')
		return 'b';
	else
		return 'w';
}

//----------------------------------- RUCH PIONA BIAŁEGO ---------------------------------------
function pawnW(i1, j1, chessboard, color){
	
	i1=Number(i1);
	j1=Number(j1);
	
	var tab = [];
	var opponentsColor=func_OpponentsColor(color);
	
	if(i1==0)
		return tab;
	if(i1<6){
		if(chessboard[i1-1][j1]==null){
			tab.push([i1-1,j1]);
		}
		if(j1-1>=0)
			if(chessboard[i1-1][j1-1]!=null)
				if(chessboard[i1-1][j1-1][0]==opponentsColor)
					tab.push([i1-1,j1-1]);
		
		if(j1+1<=7)
			if(chessboard[i1-1][j1+1]!=null)
				if(chessboard[i1-1][j1+1][0]==opponentsColor)
					tab.push([i1-1,j1+1]);
	}
	else
		if(chessboard[i1-1][j1]==null){
			tab.push([i1-1,j1]);
			
			if(chessboard[i1-2][j1]==null){
				tab.push([i1-2,j1]);
			}
		}
		
		if(j1-1>=0)
			if(chessboard[i1-1][j1-1]!=null)
				if(chessboard[i1-1][j1-1][0]==opponentsColor)
					tab.push([i1-1,j1-1]);
		if(j1+1<=7)
			if(chessboard[i1-1][j1+1]!=null)
				if(chessboard[i1-1][j1+1][0]==opponentsColor)
					tab.push([i1-1,j1+1]);
		
	console.log(tab);
	return tab;
}

//----------------------------------- RUCH PIONA CZARNEGO ---------------------------------------
function pawnB(i1, j1, chessboard, color){
	
	i1=Number(i1);
	j1=Number(j1);
	
	var opponentsColor=func_OpponentsColor(color);
	
	var tab = [];
	
	if(i1==7)
		return tab;
	if(i1>1){
		if(chessboard[i1+1][j1]==null){
			tab.push([i1+1,j1]);
		}
		if(j1-1>=0)
			if(chessboard[i1+1][j1-1]!=null)
				if(chessboard[i1+1][j1-1][0]==opponentsColor)
					tab.push([i1+1,j1-1]);
		if(j1+1<=7)
			if(chessboard[i1+1][j1+1]!=null)
				if(chessboard[i1+1][j1+1][0]==opponentsColor)
					tab.push([i1+1,j1+1]);
	}
	else
		if(chessboard[i1+1][j1]==null){
			tab.push([i1+1,j1]);
			
			if(chessboard[i1+2][j1]==null){
				tab.push([i1+2,j1]);
			}
		}
		if(j1-1>=0)
			if(chessboard[i1+1][j1-1]!=null)
				if(chessboard[i1+1][j1-1][0]==opponentsColor)
					tab.push([i1+1,j1-1]);
		if(j1+1<=7)
			if(chessboard[i1+1][j1+1]!=null)
				if(chessboard[i1+1][j1+1][0]==opponentsColor)
					tab.push([i1+1,j1+1]);
	console.log(tab);
	return tab;
}


//----------------------------------- RUCHY WIEŻY ----------------------------------------------

function rook(i1,j1,chessboard, color){
	var tab = [];
	
	i1=Number(i1);
	j1=Number(j1);
	
	var opponentsColor=func_OpponentsColor(color);
	
	//Sprawdzenie istnienia pól szachowych
	var mtr=1;

	

	
	while(i1+mtr<8){	//SPRAWDZANIE MIEJSCA W DÓŁ
	

		
		if(chessboard[i1+mtr][j1]==null){	//puste pola
			tab.push([i1+mtr,j1]);
		}
		else{
			if(chessboard[i1+mtr][j1][0]==opponentsColor){	//bierka przeciwnika, czyli ostatnie pole
				tab.push([i1+mtr,j1]);
			}
			break;
		}
		
		mtr++;
	}
	
	mtr=1;

	
	while(i1-mtr>=0){	//SPRAWDZANIE MIEJSCA W GÓRĘ

		if(chessboard[i1-mtr][j1]==null){
			tab.push([i1-mtr,j1]);
		}
		else{	
			if(chessboard[i1-mtr][j1][0]==opponentsColor){
				tab.push([i1-mtr,j1]);
			}
			break;
		}
		
		mtr++;
	}
	
	mtr=1;

	
	while(j1+mtr<8){	//SPRAWDANIE MIEJSCA W PRAWO
		
		if(chessboard[i1][j1+mtr]==null){
			tab.push([i1,j1+mtr]);
		}
		else{
			if(chessboard[i1][j1+mtr][0]==opponentsColor){
				tab.push([i1,j1+mtr]);
			}
			break;
		}
		
		mtr++;
	}
	
	mtr=1;
	
	
	while(j1-mtr>=0){		//SPRAWDZANIE MIEJSCA W LEWO
		
		if(chessboard[i1][j1-mtr]==null){
			tab.push([i1,j1-mtr]);
		}
		else{	
			if(chessboard[i1][j1-mtr][0]==opponentsColor){
				tab.push([i1,j1-mtr]);
			}
			break;
		}
		
		mtr++;
	}
	
	console.log(tab);
	return tab;
} 

// -------------------------------------------------------------------------------------
// ---------------------------------------RUCHY GOŃCA ----------------------------------
// -------------------------------------------------------------------------------------

function bishop(i1,j1,chessboard, color){
	var tab = [];
	
	//Sprawdzenie istnienia pól szachowych
	var mtr=1;
	
	i1 = Number(i1);
	j1 = Number(j1);
	
	var opponentsColor=func_OpponentsColor(color);
	

	while(i1+mtr<8){
		
		if(chessboard[i1+mtr][j1+mtr]==null/* && j1+mtr<8*/){
			tab.push([i1+mtr,j1+mtr]);
		}
		else{
			if(chessboard[i1+mtr][j1+mtr][0]==opponentsColor){
				tab.push([i1+mtr,j1+mtr]);
			}
			break;
		}
		
		mtr++;
	}
	
	mtr=1;
	
	while(i1+mtr<8){
		
		if(chessboard[i1+mtr][j1-mtr]==null/* && j1-mtr>=0*/){
			tab.push([i1+mtr,j1-mtr]);
		}
		else{
			if(chessboard[i1+mtr][j1-mtr][0]==opponentsColor){
				tab.push([i1+mtr,j1-mtr]);
			}
			break;
		}
		
		mtr++;
	}
	
	
	mtr=1;
	
	while(i1-mtr>=0){
		
		if(chessboard[i1-mtr][j1+mtr]==null/* && j1+mtr<8*/){
			tab.push([i1-mtr,j1+mtr]);
		}
		else{
			if(chessboard[i1-mtr][j1+mtr][0]==opponentsColor){
				tab.push([i1-mtr,j1+mtr]);
			}
			break;
		}
		
		mtr++;
	}
	
	
	mtr=1;
	

	while(i1-mtr>=0){
		
		if(chessboard[i1-mtr][j1-mtr]==null/* && j1-mtr>=0*/){
			tab.push([i1-mtr,j1-mtr]);
		}
		else{
		//	console.log('Warning');
		//	console.log(chessboard[i1-mtr][j1-mtr][0]);
			if(chessboard[i1-mtr][j1-mtr][0]==opponentsColor){
				tab.push([i1-mtr,j1-mtr]);
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

function queen(i1,j1,chessboard, color){
	
	var tab = [];
	var tabBishop = [];
	var tabRook = [];
	
	tabBishop = bishop(i1, j1, chessboard,color);
	tabRook = rook(i1, j1, chessboard, color);
	
	tab = tabBishop.concat(tabRook);
	
	console.log(tab);
	
	return tab;
}

// -------------------------------------------------------------------------------------
// ---------------------------------------RUCHY KRÓLA ----------------------------------
// -------------------------------------------------------------------------------------

function king(i1,j1,chessboard, color){
	
	var tab = [];
	
	i1 = Number(i1);
	j1 = Number(j1);
	
	var opponentsColor=func_OpponentsColor(color);
	
	if(i1-1>=0 && j1-1>=0)
		if(chessboard[i1-1][j1-1]==null || chessboard[i1-1][j1-1][0]==opponentsColor)
			tab.push([i1-1, j1-1]);
	
	if(i1-1>=0 && j1>=0)
		if(chessboard[i1-1][j1]==null || chessboard[i1-1][j1][0]==opponentsColor)
			tab.push([i1-1,j1]);
	
	if(i1-1>=0 && j1+1<=7)
		if(chessboard[i1-1][j1+1]==null || chessboard[i1-1][j1+1][0]==opponentsColor)
			tab.push([i1-1,j1+1]);
	
	if(i1>=0 && j1-1>=0)						//pierwszy warunek jest zawsze spełniony, da się zopymalizować?
		if(chessboard[i1][j1-1]==null || chessboard[i1][j1-1][0]==opponentsColor)
			tab.push([i1,j1-1]);
	
	if(i1<=7 && j1+1<=7)
		if(chessboard[i1][j1+1]==null || chessboard[i1][j1+1][0]==opponentsColor)
			tab.push([i1,j1+1]);
	
	if(i1+1<=7 && j1-1>=0)
		if(chessboard[i1+1][j1-1]==null || chessboard[i1+1][j1-1][0]==opponentsColor)
			tab.push([i1+1,j1-1]);
	
	if(i1+1<=7 && j1<=7)
		if(chessboard[i1+1][j1]==null || chessboard[i1+1][j1][0]==opponentsColor)
			tab.push([i1+1, j1]);
	
	if(i1+1<=7 && j1+1<=7)
		if(chessboard[i1+1][j1+1]==null || chessboard[i1+1][j1+1][0]==opponentsColor)
			tab.push([i1+1,j1+1]);
	
	console.log(tab);
	return tab;
}

// -------------------------------------------------------------------------------------
// ---------------------------------------RUCHY SKOCZKA --------------------------------
// -------------------------------------------------------------------------------------

function knight(i,j,chessboard, color){
	
	var tab = [];
	
	i = Number(i);
	j = Number(j);
	
	var opponentsColor=func_OpponentsColor(color);

	if(i-1>=0 && j-2>=0)
		if(chessboard[i-1][j-2]==null || chessboard[i-1][j-2][0]==opponentsColor)
			tab.push([i-1,j-2]);
	
	if(i-2>=0 && j-1>=0)
		if(chessboard[i-2][j-1]==null || chessboard[i-2][j-1][0]==opponentsColor)
			tab.push([i-2,j-1]);
	
	if(i-2>=0 && j+1<=7)
		if(chessboard[i-2][j+1]==null || chessboard[i-2][j+1][0]==opponentsColor)
			tab.push([i-2,j+1]);
	
	if(i-1>=0 && j+2<=7)
		if(chessboard[i-1][j+2]==null || chessboard[i-1][j+2][0]==opponentsColor)
			tab.push([i-1,j+2]);
	
	if(i+1<=7 && j-2>=0)
		if(chessboard[i+1][j-2]==null || chessboard[i+1][j-2][0]==opponentsColor)
			tab.push([i+1,j-2]);

	if(i+2<=7 && j-1>=0)
		if(chessboard[i+2][j-1]==null || chessboard[i+2][j-1][0]==opponentsColor)
			tab.push([i+2,j-1]);
	
	if(i+2<=7 && j+1<=7)
		if(chessboard[i+2][j+1]==null || chessboard[i+2][j+1][0]==opponentsColor)
			tab.push([i+2,j+1]);
	
	if(i+1<=7 && j+2<=7)
		if(chessboard[i+1][j+2]==null || chessboard[i+1][j+2][0]==opponentsColor)
			tab.push([i+1,j+2]);
	
	
	console.log(tab);
	return tab;
}

