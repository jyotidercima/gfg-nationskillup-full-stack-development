const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
    res.render('index', { message: 'Hello, World! :) ' });
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});