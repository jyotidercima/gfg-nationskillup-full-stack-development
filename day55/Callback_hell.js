

const fs = require('fs');

///function to simulate file reading with a delay
function readFileWithDelay(filename, callback) {
    setTimeout(() => {
        fs.readFile(filename, 'utf8', (err, data) => {
            if (err) return callback(err);
            console.log(`✅Finished reading: ${filename}`);
            callback(null, data);
        });
    }, Math.random() * 3000); //simulating variable async //delay (0-3 sec)
}

//callback hell Example with interactive logs
console.log("🟢Starting to read files...");
readFileWithDelay('file1.txt', (err, data1) => {
    if (err) return console.error('❌Error reading file1: ', err);
    console.log(`📄File1 Content: ${data1}`);
    readFileWithDelay('file2.txt', (err, data2) => {
        if (err) return console.error('❌Error reading File2: ', err);
        console.log(`📄File2 Content: ${data2}`);
        readFileWithDelay('file3.txt', (err, data3) => {
            if (err) return console.error('❌Error reading file3: ', err);
            console.log(`📄File3 content: ${data3}`);
            console.log('✅All files read successfully!🎉');
        })
    })
})