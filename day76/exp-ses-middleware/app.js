const express = require('express');
const session = require('express-session');
const app = express();
const PORT = 3000;

//Setting the session middleware
app.use(session({
    secret: 'gfg-key',
    resave: false,
    saveUninitialized: true
}));

//set session in the /route
app.get('/', (req, res) => {
    req.session.gfgUser = 'geeksforgeeks';
    res.send(`Hey Geek! Session is set! Now Go to 
        <a href="/get">/get</a>
        to retrieve the session.`)
});

//get session in the /get route
app.get('/get', (req, res) => {
    //retrieve the session variable
    const gfgUser = req.session.gfgUser || 'No session set';
    res.send(`Session variable: ${gfgUser}`);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});