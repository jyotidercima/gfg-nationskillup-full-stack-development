const express = require('express'),
    mongoose = require('mongoose'),
    passport = require('passport'),
    LocalStrategy = require('passport-local'),
    passportLocalMongoose = require('passport-local-mongoose');

const User = require('./model/User');
let app = express();

mongoose.connect('mongodb://localhost/27017');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(require("express-session")({
    secret: "Rusty is a dog",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//showing home page
app.get("/", function (req, res) {
    res.render('home');
});

//showing secret page
app.get('/register', (req, res) => {
    res.render("register");
});

//handling user signup
app.post('/register', async (req, res) => {
    const user = await User.create({
        username: req.body.username,
        password: req.body.password
    });
    return res.status(200).json(user);
});

//showing login form
app.get('/login', (req, res) => {
    res.render('login');
});

//handling user login
app.post('/login', async function (req, res) {
    try {
        const user = await User.findOne({
            username: req.body.username
        });
        if (user) {
            const result = req.body.password === user.password;
            if (result) {
                res.render('secret');
            } else {
                res.status(400).json({ error: "password doesn't match" });
            }
        }
        else {
            res.status(400).json({ error: "User doesn't exist" });
        }

    } catch (error) {
        res.status(400).json({ error });
    }
});

app.get('/logout', function (req, res) {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        res.redirect('/');
    });
});

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/login");
}

let port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("Server has Started!!");
});

