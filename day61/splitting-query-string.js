var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    var q = url.parse(req.url, true).query; //Parse the queru string
    var txt = q.year + " " + q.month; //Get year and month from query string
    res.end(txt); //display the result
}).listen(8080, () => {
    console.log('Server running at http://localhost:8080/');
})      