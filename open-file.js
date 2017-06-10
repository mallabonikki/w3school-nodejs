var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    fs.open('openfile1.txt', 'w', function (err, file) {
        if (err) throw err;
        console.log('Open the file and if not exist it will create');
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.write('File opened');
        res.end();
    });
}).listen(8080);