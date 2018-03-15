// Write a function sumNumbers which is given an array of numbers and 
// returns the sum of the numbers.

var sumNumbers = function (numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
return sum;
};

module.exports=sumNumbers;
