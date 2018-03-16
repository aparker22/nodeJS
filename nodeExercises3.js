var fs = require('fs');
var gm = require('gm');
var request = require('request');

var url = 'https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png';
var filename = 'files/js-logo.png';
var thumbnailFilename = 'files/js-logo-small.png';
var requestOptions = {
  url: url,
  encoding: null
};
request(requestOptions, (err, response, data) => {
  if (err) {
    console.log(err.message);
    return;
  }

  fs.writeFile(filename, data, (err) => {
    if (err) {
      console.log(err.message);
      return;
    }
    gm(filename)
      .resize(240, 240)
      .write(thumbnailFilename, (err) => {
        if (err) {
          console.log(err.message);
          return;
        }
        console.log('It worked');
      });
  });
});