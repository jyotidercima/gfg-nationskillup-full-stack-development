const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs');
const PORT = 5000;

//middleware to serve static files from 'public' dir
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send('Hello Geek');
});

app.listen(PORT, () => {
    console.log(`Server Established at PORT -> ${PORT}`);
});
















// app.use((req, res, next) => {
//     let filepath = path.join(__dirname, req.url);
//     console.log(filepath)

//     fs.stat(filepath, (err, fileinfo) => {
//         if (err) {
//             next();
//             return
//         }
//         if (fileinfo.isfile()) {
//             res.sendFile(filepath);
//         }
//         else {
//             next();
//         }
//     })

// });


// app.listen(PORT, () => {
//     console.log(`Listening to port ${PORT}`);
// })



