var app = require('express')();
var http = require('http').createServer(app);
const PORT = 3000;

//this initializes socket.io and listed for client connections.
var io = require('socket.io')(http);



let upvote_count = 0;

io.on('connection', function (socket) {
    console.log('a user has connected!');

    //Broadcast upvote count --> this code increment decrement the upvote count and broadcasts it to all connectd clients. 
    socket.on('upvote-event', (upvote_flag) => {
        // console.log('upvote: ' + upvote_flag);
        upvote_count += upvote_flag ? 1 : 0;
        let f_str = upvote_count + (upvote_count == 1 ? ' upvote' : ' upvotes');

        io.emit('update-upvotes', f_str);
    });

    //this logs when a user disconnects
    socket.on('disconnect', function () {
        console.log('user disconnected!');
    });


});

app.get('/', function (req, res) {
    // res.send("Hello World");
    res.sendFile(__dirname + '/public/index.html');
});


http.listen(PORT, () => console.log('listening on: ' + PORT));
