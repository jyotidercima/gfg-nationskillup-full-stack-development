const fs = require('fs');
const readStream = fs.createReadStream('./file.txt'); // readstream create a readable stream to read data from a file.  ideal for reading large fiels as it reads the file in chunks rather than loading the entire file into memory 


console.log('Start');

setTimeout(() => {
    console.log('Timeout callback');
}, 2000);

setImmediate(() => {
    console.log('Immediate callback');
});

readStream.on('data', (chunk) => {
    console.log(chunk.toString());
})

console.log('End');