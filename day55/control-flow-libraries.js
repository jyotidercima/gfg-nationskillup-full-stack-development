const async = require('async');
const fs = require('fs');
async.parallel(
    [
        callback => fs.readFile('file1.txt', 'utf8', callback),
        callback => fs.readFile('file2.txt', 'utf8', callback),
        callback => fs.readFile('file3.txt', 'utf8', callback)
    ],
    (err, results) => {
        if (err) throw err;
        console.log(results);
    }
);