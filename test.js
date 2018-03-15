var assert = require('assert')

var printNumbers = require('./JS102/printNumbers')

assert(printNumbers(1,4).toString() === [1, 2, 3, 4].toString(), 'All numbers should be printed')

var printSquare = require('./JS102/printSquare');

assert(printSquare(5).toString() === ['*****', '*****', '*****', '*****', '*****'].toString(), 'Should print a square');

var printBox = require('./JS102/printBox')

assert(printBox(4,6).toString()===['****', '*  *', '*  *', '*  *', '*  *', '****'].toString(), 'arrays should be equal')

var printBanner = require('./JS102/printBanner')

assert(printBanner('Hey').toString() == ['*******', '* Hey *', '*******'].toString(), 'Arrays should be equal');

var factors = require('./JS102/numberFactor')

assert.deepEqual(factors(45),[ 1, 3, 5, 9, 15, 45 ], 'Should list these factors')

var cipher = require('./JS102/cipher')

assert(cipher('A', 11) === 'L', 'L is 11 characters from A')

var decipher = require('./JS102/reverseCipher');

assert(decipher('L~swp+t~+R}pl', -11)==='Ashley is Great', 'Ashley is great, of course');

var leetSpeek = require('./JS102/leetSpeak');

assert(leetSpeek('Leet') === 'l337', 'Leetspeak is fun');

var longVowels = require('./JS102/longVowels');

assert(longVowels('good') === 'goooood', 'Replace double vowels with 5 vowels');
assert(longVowels('man') === 'man', 'Man should not change')

var sumNumbers = require('./JS102/sumNumbers');

assert(sumNumbers([1,2])===3, 'These numbers equal 3');
assert(sumNumbers(1, 4) != 3, 'These numbers do not add up');

var positiveNumbers = require('./JS102/positives');

assert.deepEqual(positiveNumbers([1, -3, 5]), [1,5], 'Only the positives please');
assert.deepEqual(positiveNumbers([1, 0, 4]), [1, 0, 4], 'All of these are positive');

var matrixAdd = require('./JS102/matrix');

assert.deepEqual(matrixAdd([[1, 3], [2, 4]], [[5, 2], [1, 0]]), [ [ 6, 5 ], [ 3, 4 ] ], 'This should work')

var matrixMultiply = require('./JS102/matrixMultiply');

assert.deepEqual(matrixMultiply([[2, 4], [3, 4]], [[5, 2], [3, 1]]), [ [22,  8], [27, 10] ], 'This is the answer given');

var rockPaperScissors = require('./JS102/rockPaperScissors');

assert(rockPaperScissors('rock', 'scissors') === 'Player 1 Wins', 'Rock beats scissors');
assert(rockPaperScissors('rock', 'paper') === 'Player 2 Wins', 'Paper beats rock');
assert(rockPaperScissors('rock', 'rock') === 'Draw', 'Tie Game');




