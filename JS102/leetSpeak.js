// Write a function leetspeak which is given a string, and 
// returns the leetspeak equivalent of the string.

var leetSpeek = function (str) {
    var str = str.toLowerCase();
    var str = str.replace(/a/g, 4);
    var str = str.replace(/e/g, 3);
    var str = str.replace(/g/g, 6);
    var str = str.replace(/i/g, 1);
    var str = str.replace(/o/g, 0);
    var str = str.replace(/s/g, 5);
    var str = str.replace(/t/g, 7);
    return str;
};

module.exports=leetSpeek;