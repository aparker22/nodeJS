// Write a function matrixMultiply which is given two two-dimensional 
// arrays - you can assume the matricies are of size 2x2. It will return 
// the result of matrix multiplication between the two given matricies.


var matrixMultiply = function (matrix1, matrix2) {
    var multiplied = [[0,0], [0,0]];
    multiplied[0][0] = (matrix1[0][0] * matrix2[0][0]) + (matrix1[0][1] * matrix2[1][0]);
    multiplied[0][1] = (matrix1[0][0] * matrix2[0][1]) + (matrix1[0][1] * matrix2[1][1]);
    multiplied[1][0] = (matrix1[1][0] * matrix2[0][0]) + (matrix1[1][1] * matrix2[1][0]);
    multiplied[1][1] = (matrix1[1][0] * matrix2[0][1]) + (matrix1[1][1] * matrix2[1][1]);
    return multiplied;
};


module.exports = matrixMultiply;