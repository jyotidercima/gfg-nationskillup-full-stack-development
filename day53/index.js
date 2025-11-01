const http = require('http');

const server = http.createServer((request, response) => {
    //request handling logic
    // response.writeHead(200, { 'Content-Type': 'text/plain' });
    // response.end('Hello, This is Jyoti\'s first server!\n');

    //handling get and post requests
    if (request.method === 'GET') {
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        response.end('Handling GET Request');
    } else if (request.method === 'POST') {
        let body = '';
        request.on('data', chunk => { body += chunk; });
        request.on('end', () => {
            response.writeHead(200, { 'Content-Type': 'text/plain' });
            response.end(`Received data: ${body}`);
        });
    } else {
        response.writeHead(405, { 'Content-Type': 'text/plain' });
        response.end('Method Not Allowed');
    }

    //handling requests and responses with Express.js

});
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});