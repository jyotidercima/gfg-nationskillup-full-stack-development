const express = require('express');
const mongoose = require('mongoose');

const jwt = require('jsonwebtoken');
const User = require('./userModel');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Welcome to jwt token test", { data: User });
});

//Handling post request
app.post('/login', async (req, res, next) => {
    let { email, password } = req.body;
    let existingUser;
    try {
        existingUser = await User.findOne({ email: email });
    } catch {
        const error = new Error("Error! Something went wrong can't find user email here...");
        return next(error);
    }
    if (!existingUser || existingUser.password != password) {
        const error = Error("Wrong details please check the details entered!");
        return next(error);
    }
    let token;
    try {
        //Creating jwt token
        token = jwt.sign(
            {
                userId: existingUser.id,
                email: existingUser.email
            },
            "secretkeyappearshere",
            { expiresIn: "1h" }
        );
    } catch (err) {
        console.log(err);
        const error = new Error("Error! Something went wrong in creating token");
        return next(error);
    }
    res
        .status(200)
        .json({
            success: true, data: {
                userId: existingUser.id,
                email: existingUser.email,
                token: token,
            },
        });
});

//handling post request

app.post('/signup', async (req, res, next) => {
    const { name, email, password } = req.body;
    const newUser = new User({ name, email, password, });
    try {
        await newUser.save();
    } catch {
        const error = new Error("Error! Something went wrong saving data");
        return next(error);
    }
    let token;
    try {
        token = jwt.sign({
            userId: newUser.id,
            email: newUser.email
        },
            "secretkeyappearshere",
            { expiresIn: "1h" }
        );
    } catch (err) {
        const error = new Error("Error! Something went wrong in token generation after signup");
        return next(error);
    }
    res.status(201)
        .json({
            success: true,
            data: {
                userId: newUser.id,
                email: newUser.email,
                token: token
            },
        });
});

//Decoding JWT Token

app.get('/accessResource', (req, res) => {
    const token = req.headers
        .authorization.split(" ")[1];

    //Authorization: 'Bearer TOKEN'
    if (!token) {
        res.status(200)
            .json({
                success: false,
                message: "Error! Token was not provided."
            });
    }

    //Decoding the token
    const decodedToken = jwt.verify(token, "secretkeyappearshere");
    res.status(200).json({
        success: true,
        data: {
            userId: decodedToken.userId,
            email: decodedToken.email
        }
    });

});



//connecting to the database
mongoose
    .connect('mongodb://localhost:27017/test-auth-with-jwt')
    .then(() => {
        app.listen(3000, () => {
            console.log(`Server is listening on port 3000`);
        });
    }).catch((err) => { console.log("Error Occurred") });