const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.set('view engine', 'ejs');

//calling the public folder
app.use(express.static('public'));

//handling get request
app.get('/', (req, res) => {
    res.send('Welcome to GeekforGeeks Video Call App');
});







// app.listen(4000, () => {
//     console.log("Server running on port 4000");
// })
server.listen(4000, () => {
    console.log("Server running on port 4000");
})