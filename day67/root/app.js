const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index', { data: [], showButton: true });
});

app.get('/list', (req, res) => {
    const data = ['JavaScript', 'Node.js', 'Express', 'EJS'];
    res.render('index', { data: data, showButton: false });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})