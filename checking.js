function checkedByWhite(chessboard){
	var whiteCheckingTab = [];
	
	var checkedByPawn =[];
	var checkedByKnight =[];
	var checkedByBishop =[];
	var checkedByQueen =[];
	var checkedByKing =[];
	var checkedByRook =[];
	
	for(let i=7; i>=0;i--)
		for(let j=0; j<=7; j++)
			if(chessboard[i][j][0]=='w'){
				
				switch(chessboard[i][j][1]){
					case 'P': 					
						checkedByPawn = pawnW(i, j, chessboard, color);
						break;
						
					case 'N':		
						checkedByKnight = knight(i, j, chessboard, color);
						break;
						
					case 'B':		
						checkedByBishop = bishop(i, j, chessboard, color);
						break;
						
					case 'Q':		
						checkedByQueen = queen(i, j, chessboard, color);
						break;
						
					case 'K':		
						checkedByKing = king(i, j, chessboard, color);
						break;
						
					case 'R':		
						checkedByRook = rook(i, j, chessboard, color);
						break;
				}
			}
	
	console.log(whiteCheckingTab);
	return whiteCheckingTab;
}