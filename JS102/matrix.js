// Write a function matrixAdd which is given 
// two two-dimensional arrays, and returns a new 
// two-dimensional array containing their matrix sum.



var matrixAdd = function (matrix1, matrix2) {
    var newMatrix = [];
    for (var i = 0; i < matrix1.length; i++) {
        newMatrix[i] = [];
        for (var j=0; j < matrix1[0].length; j++) {
            var cell1 = matrix1[i][j]
            var cell2 = matrix2[i][j]
            newMatrix[i].push(cell1 + cell2);
        }
    }
    return newMatrix;
}

module.exports = matrixAdd;