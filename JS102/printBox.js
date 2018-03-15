// Write function printBox which is given a width and 
// height and prints a hollow box of those given dimensions.

var printBox = function (x, y) {
    var array = [];
    array.push('*'.repeat(x))
    console.log('*'.repeat(x))
    for (var height=1; height <= (y - 2); height++) {
        array.push('*' + ' '.repeat(x-2) + '*')
        console.log('*' + ' '.repeat(x-2) + '*');
    }
    array.push('*'.repeat(x))
    console.log('*'.repeat(x))
    return array;
};

module.exports = printBox;