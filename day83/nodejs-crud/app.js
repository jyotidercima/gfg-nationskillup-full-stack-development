const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const StudentModel = require('./src/studentschema');

const query = 'mongodb+srv://dercimajyoti_db_user:<db_password>@cluster0.tbhtv4w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const db = (query);
mongoose.Promise = global.Promise;

mongoose.connect(db, {
    useNameUrlParser: true,
    useUnifiedTopolgy: true
}, function (error) {
    if (error) {
        console.log("Error!" + error);
    }
});

module.exports = router;

router.get('/save', (req, res) => {
    const newStudent = new StudentModel({
        StudentId: 101,
        Name: 'Sam',
        Roll: 1,
        Birthday: '2001 - 09 - 08'
    });

    newStudent.save((err, data) => {
        err ? console.log(err) : res.send("Data inserted");
    });
});