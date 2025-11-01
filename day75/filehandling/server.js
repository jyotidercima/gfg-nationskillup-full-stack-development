const express = require('express');
const upload = require('./file-upload');

const app = express();

const PORT = 8080;

app.get("/", (req, res) => {
    res.send("Hello from Express!");
});

app.post('/upload', upload.single("file"), (req, res) => {
    if (!req.file) {
        res.status(413).send(`File could not Uploaded!, please attach jpeg file under 5mb`);
        return;
    }
    res.status(201).send("Files uploaded successfully");
})

app.listen(PORT, () => {
    console.log(`Server is started and listening at port: ${PORT}`);
});