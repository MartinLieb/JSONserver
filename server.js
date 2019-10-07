
var http = require('http');
var dato = require('./dato');
var fs = require('fs');


var server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    var studerende = {};
    studerende.navn = "Martin";
    studerende.skole = "Zealand";
    studerende.tid = dato.myDateTime();
     
    fs.readFile('C:/Users/Pessi/Documents/interview.txt', (err, data) => {
        studerende.file = new String(data);
        res.end(JSON.stringify(studerende));
    });

}).listen(80);