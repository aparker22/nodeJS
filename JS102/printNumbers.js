// Write a function printNumbers which is given a start number and an end number. 
// It will print the numbers from one to the other, one per line:


var printNumbers = function (x, y) {
    var array = []
    while (x <= y) {
        console.log(x)
        array.push(x);
        x ++;
    }
    return array;
};

module.exports = printNumbers;