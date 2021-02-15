//---------------------------SPRAWDZANIE DOPUSZCZALNOŚCI RUCHU----------------------------------

function isMovePossible(el1_arg, el2_arg, taken_arg, chessboard_arg){
	
	var color = taken_arg[0]; 		//kolor pobranej figury
	var chessPiece = taken_arg[1];	//rodzaj bierki
	
	switch(chessPiece){
		case 'P': 		//pion - Pawn
			break;
		case 'N':		//skoczek - kNight
			break;
		case 'B':		//goniec - Bishop
			break;
		case 'Q':		//hetman - Queen
			break;
		case 'K':		//król - King
			break;
		case 'R':		//wieża - Rook
			break;
	}
	
	return true;
}

//----------------------------------- RUCHY WIEŻY ----------------------------------------------

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
	

	console.log(tab);
	return tab;
} 

// ---------------------------------------RUCHY GOŃCA ----------------------------------

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
	

	console.log(tab);
	
	return tab;
}