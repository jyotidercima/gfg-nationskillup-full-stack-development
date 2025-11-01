const express = require('express');
const app = express();
const methodOverride = require("method-override");
const { default: mongoose } = require('mongoose');

//App Config
mongoose.connect('mongodb://localhost/restful_blog_app');
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(methodOverride("_method"));

//Creating the schema
let blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: { type: Date, default: Date.now }
});

let Blog = mongoose.model("Blog", blogSchema);

app.listen(process.envPORT, process.env.IP, function () {
    console.log(`Server is Running!!!`);
})