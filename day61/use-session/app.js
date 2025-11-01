//Login Logout session

const express = require("express");
const app = express();
const session = require("express-session");
const cookieParser = require("cookie-parser");
const PORT = 4000;

app.use(cookieParser());

app.use(session({
    secret: "jyoti",
    saveUninitialized: true,
    resave: true
}));

const user = {
    name: "jyoti",
    Roll_number: 43,
    Address: "home"
};

app.get("/login", (req, res) => {
    req.session.user = user;
    req.session.save();
    return res.send("Your are logged in");
});

app.get("/user", (req, res) => {
    const sessionuser = req.session.user;
    res.send(sessionuser);
});

app.get("/logout", (req, res) => {
    req.session.destroy();
    res.send("Your are logged out ");
});

app.listen(PORT, () => console.log(`Server at ${PORT}`));