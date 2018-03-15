// Write a function printSquare which is given a size and 
// prints a square of that size using asterisks.

var printSquare = function (x) {
    var array = []
    for (var num = 1; num <= x; num++) {
        array.push('*'.repeat(x))
        console.log('*'.repeat(x));
    }
    return array;
};

module.exports = printSquare;