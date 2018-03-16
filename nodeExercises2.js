var request = require('request');
var fs = require('fs');

var url = 'https://en.wikipedia.org/wiki/Continuation-passing_style';
var filename = 'files/output.html';

var saveWebPage = function(url, filename) {
    request.get(url, function(err, response, html) {
        if (err) {
            console.log(err.message);
            return;
        }
        fs.writeFile(filename, html,function (err) {
            if (err) {
                console.log(err.message);
                return;
            }
        })
        console.log('It worked');
    })
};

saveWebPage(url, filename);




