const express = require('express');
const cors = require('cors');
const app = express();

//enable CORS for all routes
// app.use(cors());

//configuireing CORS for specific origins
const corsOptions = {
    origin: 'http://example.com/', // Allow only this domain
    methods: 'GET,POST', // Allow only specific HTTP methods
    allowedHeaders: 'Content-Type,Authorization' // Allow specific headers
};

app.use(cors(corsOptions));

//handling CORS error manually
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
});

//Handling preflight requests
app.options('*', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.sendStatus(200);
});

//enabling CORS for Specific Routes
app.get('/public-data', cors(), (req, res) => {
    res.json({ message: "Public data accessible to all origins" });
});

const restrictedCors = cors({ origin: 'http://trusted-domain.com/' });
app.get('/secure-data', restrictedCors, (req, res) => {
    res.json({ message: "Data accessible only to trusted-domain.com" });
});

//CORS in Production Environment
const corsOption = {
    origin: process.env.ALLOWED_ORIGIN || 'http://default-domain.com/',
    methods: 'GET,POST,PUT,DELETE',
    credentials: true
};

app.use(cors(corsOption));






app.get('/api/data', (req, res) => {
    res.json({ message: 'CORS is enabled for all origins!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));