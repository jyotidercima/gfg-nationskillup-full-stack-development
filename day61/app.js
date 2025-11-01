const http = require('http');

http.createServer((request, response) => { //Used to create a new http server 
    //request object represents the incoming request from the client.
    //response object is used to send the http response to the client.
    response.write('Hello World!'); //send data as part of the response
    response.end(); // signals that the response is complete
}).listen(3000); //server.listedn() makes the server listen on the specified port 3000 in this case

console.log("Server started on port 3000");