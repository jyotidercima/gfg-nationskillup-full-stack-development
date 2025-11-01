const express = require('express');
const morgan = require('morgan');
const app = express();
const PORT = 5000;

//Using the 'combined' predefined format
// app.use(morgan('combined'));
// app.use(morgan('dev'));
// app.use(morgan('Method- : method URL- : url Status- :status ResponseTime- :response-time ms'));

morgan.token('time', function (req, res) {
    return new Date().toISOString();
});

app.use(morgan(':time :method :url : status :response-time ms'));

app.get('/', (req, res) => {
    res.send("Using Tokens in Morgan");
});

app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`);
});
