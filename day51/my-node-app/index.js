import http from "http";

var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Hello World!');
}).listen(8080);














// import http from "http";
// import fs from 'fs';
// import path from 'path';
// import { fileURLToPath } from 'url';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const server = http.createServer((req, res) => {
//     const filePath = path.join(__dirname, "message.txt");

//     fs.readFile(filePath, "utf8", (err, data) => {
//         if (err) {
//             res.writeHead(500, { "Content-Type": "text/plain" }); //this means there is an error from server side
//             res.end("Error reading file"); //error was found
//         }
//         else {
//             res.writeHead(200, { "Content-Type": "text/plain" }); //here it means all ok - 200 success
//             res.end(data); //show data
//         }
//     });
// });

// server.listen(3000, () => { //port is 3000
//     console.log("Server is running on port 3000");
// });