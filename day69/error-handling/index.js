const express = require('express');
const app = express();

//Default error handling
app.get("/", (req, res) => {
    throw new Error("Something Broke");
});

//custom error-handling middleware
app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({ message: "Oops! Something went wrong." });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});