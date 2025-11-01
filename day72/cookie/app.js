//app.js

const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

// Middleware to parse cookies from the request
app.use(cookieParser());

//Route to set the cookie
app.get('/setCookie', (req, res) => {
    // Setting a cookie
    res.cookie('username', 'GeeksForGeeks');
    res.send('Cookies set successfully!');
});

//Route to retrieve the cookie
app.get('/getCookie', (req, res) => {
    //Retrieving cookies from the request
    const username = req.cookies.username;
    res.send(`Username: ${username}`);
});

//Route to delete the cookie
app.get('/clearCookie', (req, res) => {
    // deleting a cookie
    res.clearCookie('username');
    res.send('Cookie deleted successfully!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});