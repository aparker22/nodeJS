// Write a function printBanner which is given some text 
// and prints a banner with a border surrounding the text. 
// The border has to stretch to the length of the text.

var printBanner = function (text) {
    var banner = []
    console.log('*'.repeat(text.length + 4))
    banner.push('*'.repeat(text.length + 4))
    console.log(`* ${text} *`)
    banner.push(`* ${text} *`)
    console.log('*'.repeat(text.length + 4))
    banner.push('*'.repeat(text.length + 4))
    return banner;
};

module.exports = printBanner;