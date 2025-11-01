const express = require('express');
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send('<h1>Hello, Everyone! </h1>This is my simple Express server');
});

app.listen(PORT, () => {
    console.log(`Server is live at http://localhost:${PORT}`);
})