// app.js
const express = require('express');
const cors = require('cors');  // Import the cors package
const app = express();

// Enable CORS for all origins (you can restrict it to specific domains later)
// app.use(cors());

// Example route to get data
app.get('/data', (req, res) => {
    res.json({
        message: 'CORS is enabled for all origins!',
        data: [1, 2, 3, 4, 5]
    });
});

// Start the server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});