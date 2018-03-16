
var fs = require('fs');
var readline = require('readline');
var dns = require('dns');
var http = require('http');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Write a program that prompts the user to enter a file name, and reads in the contents of the file, convert the text to all caps, and prints it out.

rl.question('What file do you want to open? ', function(answer) {
    fs.readFile(answer, function(err, data){
        var stringData = data.toString();
        var capData = stringData.toUpperCase();
        console.log(capData);
    })
    rl.close();
});

//Trigger an error condition by running the program on a non-existent file. Your program should display the error message, and 
//it should display something like:  ENOENT: no such file or directory, open 'blah.txt'

rl.question('What file do you want to open? ', function(answer) {
    fs.readFile(answer, function(err, data){
        if (err) {
            console.log(err);
        } else {
            var stringData = data.toString();
            var capData = stringData.toUpperCase();
            console.log(capData);
        }
    })
    rl.close();
  });


//Write a program that prompts the user for a domain name, looks up the IP address for the domain, and prints it out.

var domain = rl.question('Domain Name: ', function(domain) {
    dns.lookup(domain, function(err, ip) {
        if (err) {
            console.log(err);
        } else {
            console.log(ip);
        }
    })
    rl.close();
})

// Write a program to prompt the user for two file names, the first 
// file will be the input and the second file will be the output. The program 
// will read in the contents of the input file, convert its text to all caps, 
// and then write the resulting contents to the output file.

rl.question('Input file: ', function(answer) {
    capData = '';
    fs.readFile(answer, function(err, data){
        if (err) {
            console.log(err)
        } else {
        var stringData = data.toString();
        capData = stringData.toUpperCase();
        }
        })
    rl.question('Output file: ', function(answer2) {
        fs.writeFile(answer2, capData, function(err){
            if (err) {
                console.log(err);
            } else {
            console.log(capData);
            }
        })
    rl.close();
    })
});

// Write a program to save a web page. Prompt the user for a URL for the web page he wants to save, and for the filename to save to. 

rl.question('URL: ', function (answer) {
    var rawData = '';
    http.get(answer, function (res) {
        res.setEncoding('utf8');
        res.on('data', function(chunk) {
            rawData += chunk;
        });
        res.on('end', function() {
        })
    })
    rl.question('Output fule: ', function (answer2) {
        fs.writeFile(answer2, rawData, function(err){
            if (err) {
                console.log(err);
            } 
            rl.close();
        })
    })
})


