// Write a function factors which is given a number 
// and returns an array containing all its factors.

var factors = function (num) {
    var factorList = [];
    var x = 1;
    while (x <= num) {
        if (num % x == 0) {
            factorList.push(x);
        }
        x++;
    } 
console.log(factorList);
return factorList;
};

module.exports = factors;