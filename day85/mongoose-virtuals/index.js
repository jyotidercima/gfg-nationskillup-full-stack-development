const mongoose = require('mongoose');
const express = require('express');
const app = express();

mongoose.connect('mongodb://localhost:27017/gfg',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    }
);

const userSchema = new mongoose.Schema({
    name: {
        first: String,
        last: String
    }
});

userSchema.virtual('name.full')
    .get(() => this.name.first + ' ' + this.name.last);


const newUser = new User({
    name: {
        first: "David",
        last: "Beckham"
    }
})

newUser.save()
    .then(u => {
        console.log('USERNAME: ', u.name.full)
    })
    .catch(err => console.log(err));

