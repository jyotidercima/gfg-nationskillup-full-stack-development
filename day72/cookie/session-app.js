const express = require('express');
const session = require('express-session');
const app = express();

app.use(session({
    secret: 'secret_key',
    resave: false,
    saveUninitialized: true,
}));

//Route to set the session
app.get('/setSession', (req, res) => {
    //setting session data
    req.session.username = 'Jyoti Dercima';
    res.send('Session set Successfully!');
});

//Route to retrieve the session
app.get('/getSession', (req, res) => {
    const username = req.session.username;
    res.send(`Username from session is ${username}`);
});

//Route to destroy the session
app.get('/destroySession', (req, res) => {
    //Destroying the session
    req.session.destroy((err) => {
        if (err) console.error(err);
        else res.send('session destroyed successfully');
    });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})
