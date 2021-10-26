var isValidSudoku = function(board) {
    let tempArray = [] ;
    for (let k = 0 ; k < 9 ; k++){
        for (let i = 0 ; i < 9 ; i++) {
            for (let j = i +1 ; j < 9 ; j++){
                if (board[k][i] === board[k][j] && board[k][i] != "."){
                    return false ;
                }
                if (board[i][k] === board [j][k] && board[i][k] != "."){
                    return false ;
                }
            }
        }
    }
    for (let y = 0 ; y < 7 ; y+=3){
        for (let x = 0 ; x < 7 ; x+=3){
            for (let l = y ; l < y+3 ; l++) {
                for (let n = x ; n < x+3 ; n++) {
                    tempArray.push(board[l][n]) ;            
                }
            }
            tempArray.sort() ;
            console.log(tempArray) ;
            for (let h = 0 ; h < 8 ; h++){
                if (tempArray[h] === tempArray[h+1] && tempArray[h] != ".") {
                    return false ;
                }
            } 
            tempArray = [] ;
        }
    } 

    return true ;
};

board1 = [[".",".",".",".","5",".",".","1","."],[".","4",".","3",".",".",".",".","."],[".",".",".",".",".","3",".",".","1"],["8",".",".",".",".",".",".","2","."],[".",".","2",".","7",".",".",".","."],[".","1","5",".",".",".",".",".","."],[".",".",".",".",".","2",".",".","."],[".","2",".","9",".",".",".",".","."],[".",".","4",".",".",".",".",".","."]] ;
console.log(isValidSudoku(board1));