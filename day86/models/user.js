const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    balance: { type: Number, required: true, min: 0 }
});

model.exports = mongoose.model('User', userSchema);