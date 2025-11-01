const express = require('express');
const helmet = require('helmet');
const app = express();

app.use(helmet());

app.get('/', (req, res) => {
    res.send("A Demo Page for Setting up Express Server!!!" + " After using Helmet.js !!!");
});

app.listen(3000, (err) => {
    if (err) console.log(err);
    else console.log(`Server Started at http://localhost:3000`);
});