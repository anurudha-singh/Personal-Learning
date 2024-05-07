var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
    console.log('Creating the server')
  var q = url.parse(req.url, true);
  var filename =  q.pathname
  console.log(`File name is :: ${filename}`);
  fs.readFile(filename, function(err, data) {
    console.log(`Error is ${err}`)
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    } 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8087);