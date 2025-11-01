const net = require('net'); //this method provides an asynchronous network API from creating TCP server and clients. It enables the development of network application  TCP server TCP client.
const server = net.createServer((socket) => {
    socket.on('close', () => {
        console.log('Socket Closed');
    });
});

server.listen(8000);