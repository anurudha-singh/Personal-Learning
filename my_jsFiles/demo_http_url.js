var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(`The requested URL was ::${req.url}`);
  res.end();
}).listen(8083);