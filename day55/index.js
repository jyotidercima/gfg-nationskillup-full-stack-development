function fetchData(callback) {
    setTimeout(() => {
        const data = 'Sample Data';
        callback(null, data);
    }, 1000);
}
fetchData((error, data) => {
    if (error) {
        console.error('Error:', error);
    } else {
        console.log('Data:', data);
    }
});










// const EventEmitter = require('events');
// // Create a new instance of EventEmitter
// const eventEmitter = new EventEmitter();
// // Register an event listener for the 'greet' event
// eventEmitter.on('greet', () => {
//     console.log('Hello, welcome to Node.js!');
// });
// // Emit the 'greet' event
// eventEmitter.emit('greet');