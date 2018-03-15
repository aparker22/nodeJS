// Write a function decipher which is given a string, an offset, 
// and returns the original message.

var decipher = function (shiftedText, shift1) {
    console.log(shiftedText)
    var fixedText = '';
    for (var i = 0; i < shiftedText.length; i++) {
        var newChar = shiftedText.charCodeAt(i);
        var shiftChar = newChar + shift1;
        fixedText += String.fromCharCode(shiftChar);
    }
console.log(fixedText); 
return fixedText;  
};

module.exports = decipher;