var vowels = function(str) {
    var str = str.replace(/oo/g, 'o'.repeat(5));
    var str = str.replace(/ee/g, 'e'.repeat(5));
    return str;
};


module.exports=vowels;