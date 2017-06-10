var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    // Use fs.writeFile(filename: string, data: any, cb?(err){}) to change the whole content of the file
    // use fs.appendFile(filename: string, data: any, cb?(err){}) to update the content of the file
    // Use fs.unlink(filename: string, cb(err){}) to delete the file
    // use fs.rename(oldstring: string, newpath: string, cb?(err){ }) to rename the file
    fs.appendFile('myAppendFile.txt', 'String data content of my append file', function (err){
        if (err) throw err;
        console.log('Saved append file');
        res.writeHead(200, { 'Content-Type' : 'text/html' });
        res.write('Saved');
        res.end();
    });
}).listen(8080);