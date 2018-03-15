// Write a function positiveNumbers which is given an array of numbers and
// returns a new array containing only the positive numbers within the given array.

var positiveNumbers = function (numbers) {
    var newArray = [];
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] >= 0) {
            newArray.push(numbers[i]);
        }
    }
    return newArray;
};

module.exports=positiveNumbers;