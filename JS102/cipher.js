// Write a function cipher which is given a string, 
// an offset, and returns the Caesar cipher of the string.


var cipher = function (plaintext, shift) {
    var ciphertext = '';
    for (var i = 0; i < plaintext.length; i++) {
        var newChar = plaintext.charCodeAt(i);
	    var shiftChar = newChar + shift;
	    ciphertext += String.fromCharCode(shiftChar);
	}
return (ciphertext);
};

module.exports = cipher;