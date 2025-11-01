const fs = require('fs');
function readFileCallback(err, data) {
    if (err) throw err;
    console.log(data);
}
fs.readFile('file1.txt', 'utf8', readFileCallback);
fs.readFile('file2.txt', 'utf8', readFileCallback);
fs.readFile('file3.txt', 'utf8', readFileCallback);