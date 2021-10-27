var rotate = function(matrix) {
    let matrixCopy = JSON.parse(JSON.stringify(matrix)) ;
    let middle = (matrix.length-1)/2
    for ( let y = 0 ; y < matrix.length ; y++){
        for ( let x = 0 ; x < matrix.length ; x++){
            let newX = y ;
            let newY = -(x - middle) + middle ;
        matrix[newX][newY] = matrixCopy[x][y] ;
        }
    }
 
return matrix ;
};