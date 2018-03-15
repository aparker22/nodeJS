// Write a function rockPaperScissors which takes the throw of player 1 and the throw of player 2. 
// A throw can have the values of 'rock', 'paper', or 'scissors'. It will return 'player 1' if player 
// 1 wins, 'player 2' if player 2 wins, and 'draw' if there is no winner.

var rockPaperScissors = function (x, y) {
    if (x == 'rock') {
        if (y == 'scissors') {
            return 'Player 1 Wins';
        } else if (y == 'paper') {
            return 'Player 2 Wins';
        } else if (y == 'rock') {
            return 'Draw';
        }
    } else if (x == 'paper') {
        if (y == 'scissors') {
            return 'Player 2 Wins';
        } else if (y == 'paper') {
            return 'Draw';
        } else if (y == 'rock') {
            return 'Player 1 Wins';
        }
    } else if (x == 'scissors') {
        if (y == 'scissors') {
            return 'Draw';
        } else if (y == 'paper') {
            return 'Player 1 Wins';
        } else if (y == 'rock') {
            return 'Player 2 Wins';
        }
    }
};

module.exports = rockPaperScissors;