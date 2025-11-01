require('dotenv').config(); //loads environment variables from a .env file allowing secure storage of sensitive information like database URLs and port numbers.
const express = require('express'); //include expressJS library in a node.js application
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 8000;

const mongoDBURL = process.env.MONGODB_URL || 'mongodb://127.0.0.1:27017/mydemoDB';

mongoose.connect(mongoDBURL, { //estb a connection to mongoDB 
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Connection Successful"))
    .catch((err) => console.error("Connection Error: ", err));

app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
});

app.get('/', (req, res) => {
    res.send('Connected to MongoDB!');
});