function checkedByWhite(chessboard){
	var whiteCheckingTab = [[	'O',	'O',	'O',	'O',	'O',	'O',	'O',	'O'],
							[	'O',	'O',	'O',	'O',	'O',	'O',	'O',	'O'],
							[	'O',	'O',	'O',	'O',	'O',	'O',	'O',	'O'],
							[	'O',	'O',	'O',	'O',	'O',	'O',	'O',	'O'],
							[	'O',	'O',	'O',	'O',	'O',	'O',	'O',	'O'],
							[	'O',	'O',	'O',	'O',	'O',	'O',	'O',	'O'],
							[	'O',	'O',	'O',	'O',	'O',	'O',	'O',	'O'],
							[	'O',	'O',	'O',	'O',	'O',	'O',	'O',	'O']];;
	
	var checkedByPawn =[];
	var checkedByKnight =[];
	var checkedByBishop =[];
	var checkedByQueen =[];
	var checkedByKing =[];
	var checkedByRook =[];
	
	for(let i=7; i>=0;i--)
		for(let j=0; j<=7; j++)
			if(chessboard[i][j]!=null && chessboard[i][j][0]=='w'){
				
				switch(chessboard[i][j][1]){
					case 'P': 					
						//checkedByPawn = pawnW(i, j, chessboard, 'w');
						console.log('checkedByPawn=' + checkedByPawn);
						break;
						
					case 'N':		
						checkedByKnight = knightChecking(i, j, chessboard, 'w');
						console.log('checkedByKnight= ' + checkedByKnight);
						break;
						
					case 'B':		
						checkedByBishop = bishopChecking(i, j, chessboard, 'w');
						console.log('checkedByBishop= ' + checkedByBishop);
						break;
						
					case 'Q':		
						checkedByQueen = queenChecking(i, j, chessboard, 'w');
						console.log('checkedByQueen= ' + checkedByQueen);
						break;
						
					case 'K':		
						checkedByKing = kingChecking(i, j, chessboard, 'w');
						console.log('checkedByKing= ' + checkedByKing);
						break;
						
					case 'R':		
						checkedByRook = rookChecking(i, j, chessboard, 'w');
						console.log('checkedByRook= ' + checkedByRook);
						break;
				}
			}
	
	//console.log(whiteCheckingTab);
	//return whiteCheckingTab;
}
//----------------------------------------------------------------------------------
//------------------------------SZACHOWANIE WIEŻĄ-----------------------------------
//----------------------------------------------------------------------------------

function rookChecking(i1,j1,chessboard, color){
	var tab = [];
	
	//Sprawdzenie istnienia pól szachowych
	var mtr=1;

	

	
	while(i1+mtr<8){	//SPRAWDZANIE MIEJSCA W DÓŁ
	

		
		if(chessboard[i1+mtr][j1]==null){	//puste pola
			tab.push([i1+mtr,j1]);
		}
		else{
			if(chessboard[i1+mtr][j1][0]!=null){	//napotkano bierkę, czyli ostatnie szachowane pole
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
			if(chessboard[i1-mtr][j1][0]!=null){
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
			if(chessboard[i1][j1+mtr][0]!=null){
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
			if(chessboard[i1][j1-mtr][0]!=null){
				tab.push([i1,j1-mtr]);
			}
			break;
		}
		
		mtr++;
	}
	
	console.log(tab);
	return tab;
}

//----------------------------------------------------------------------------------
//------------------------------SZACHOWANIE GOŃCEM----------------------------------
//----------------------------------------------------------------------------------

function bishopChecking(i1,j1,chessboard, color){
	var tab = [];
	
	//Sprawdzenie istnienia pól szachowych
	var mtr=1;
	

	while(i1+mtr<8){
		
		if(chessboard[i1+mtr][j1+mtr]==null/* && j1+mtr<8*/){
			tab.push([i1+mtr,j1+mtr]);
		}
		else{
			if(chessboard[i1+mtr][j1+mtr][0]!=null){
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
			if(chessboard[i1+mtr][j1-mtr][0]!=null){
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
			if(chessboard[i1-mtr][j1+mtr][0]!=null){
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
			if(chessboard[i1-mtr][j1-mtr][0]!=null){
				tab.push([i1-mtr,j1-mtr]);
			}
			break;
		}
		
		mtr++;
	}
	

	console.log(tab);
	
	return tab;
}

//------------------------------------------------------------------------------------
//------------------------------SZACHOWANIE KRÓLÓWKĄ----------------------------------
//------------------------------------------------------------------------------------

function queenChecking(i1,j1,chessboard, color){
	
	var tab = [];
	var tabBishop = [];
	var tabRook = [];
	
	tabBishop = bishopChecking(i1, j1, chessboard, 'w');
	tabRook = rookChecking(i1, j1, chessboard, 'w');
	
	tab = tabBishop.concat(tabRook);
	
	console.log(tab);
	
	return tab;
}

// -------------------------------------------------------------------------------------
// ------------------------------SZACHOWANIE KRÓLEM ------------------------------------
// -------------------------------------------------------------------------------------

function kingChecking(i1,j1,chessboard, color){
	
	var tab = [];
	
	if(i1-1>=0 && j1-1>=0)
			tab.push([i1-1, j1-1]);
	
	if(i1-1>=0 && j1>=0)
			tab.push([i1-1,j1]);
	
	if(i1-1>=0 && j1+1<=7)
			tab.push([i1-1,j1+1]);
	
	if(i1>=0 && j1-1>=0)
			tab.push([i1,j1-1]);
	
	if(i1<=7 && j1+1<=7)
			tab.push([i1,j1+1]);
	
	if(i1+1<=7 && j1-1>=0)
			tab.push([i1+1,j1-1]);
	
	if(i1+1<=7 && j1<=7)
			tab.push([i1+1, j1]);
	
	if(i1+1<=7 && j1+1<=7)
			tab.push([i1+1,j1+1]);
	
	console.log(tab);
	return tab;
}

// -------------------------------------------------------------------------------------
// ------------------------------SZACHOWANIE SKOCZKIEM  --------------------------------
// -------------------------------------------------------------------------------------

function knightChecking(i,j,chessboard, color){
	
	var tab = [];

	if(i-1>=0 && j-2>=0)
		tab.push([i-1,j-2]);
	
	if(i-2>=0 && j-1>=0)
		tab.push([i-2,j-1]);
	
	if(i-2>=0 && j+1<=7)
		tab.push([i-2,j+1]);
	
	if(i-1>=0 && j+2<=7)
		tab.push([i-1,j+2]);
	
	if(i+1<=7 && j-2>=0)
		tab.push([i+1,j-2]);

	if(i+2<=7 && j-1>=0)
		tab.push([i+2,j-1]);
	
	if(i+2<=7 && j+1<=7)
		tab.push([i+2,j+1]);
	
	if(i+1<=7 && j+2<=7)
		tab.push([i+1,j+2]);
	
	console.log(tab);
	return tab;
}