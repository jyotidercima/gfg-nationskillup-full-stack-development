const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Welcome! Go to <a href="/login">Login</a>');
});


app.get('/login', (req, res) => {
    res.send(`
        <form method=POST action=/login>
        <Label for=username> Enter Name:</label>
        <input type=text name=username>
        <Label for=username> Enter Age:</label>
        <input type=number name=age>
        <input type=submit>
        </form>
        `);
});

app.post('/login', (req, res) => {
    console.log(req.body)
    res.send('data has been recieved by the server')
})

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
})