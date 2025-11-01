const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const StudentModule = require('./studentschema')

//connecting to database
const query = 'mongodb+srv://dercimajyoti_db_user:b8qY2X9K6UrOc7bh'
    + '@Clustor0.tuufn.mongodb.net/College?'
    + 'retryWrites=true&w=majority'
// + '@student.tbhtv4w.mongodb.net/College?'
// + 'retryWrites=true&w=majority&appName=Cluster0'
const db = (query);
mongoose.Promise = global.Promise;

mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, function (error) {
    if (error) {
        console.log("Error!", error);
    } else {
        console.log("Connected to MongoDB Atlas");
    }
});

//CRUD Operations

//create (POST)

router.get('/save', function (req, res) {
    const newStudent = new StudentModule({
        StudentId: 101,
        Name: "Sam", Roll: 1, Birthday: "2001 - 09 - 08"
    });

    newStudent.save(function (err, data) {
        if (err) console.log(err);
        else res.send("Data instered");
    })
});

// create
router.get('/findall', (req, res) => {
    StudentModule.find((err, data) => {
        if (err) res.status(500).send(err);
        else res.json(data);
    });
});

//Read first
router.get('/findfirst', (req, res) => {
    StudentModule.findOne({ StudentId: { $gt: 185 } })
})

module.exports = router;