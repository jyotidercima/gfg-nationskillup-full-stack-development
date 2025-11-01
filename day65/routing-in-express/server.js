const express = require('express');
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send(
        `<h1>Welcome to the Home Page!</h1>`
    );
});
app.get("/about", (req, res) => {
    res.send(`
        <h1>About us</h1><p>This is the About page.</p>
        `);
});
app.get("/contact", (req, res) => {
    res.send(`
        <h1>Contact us</h1><p>Feel free to reach out.</p>
        `);
});

//basic route params
app.get('/user/:userId', (req, res) => {
    const userId = req.params.userId;
    res.send(`
        <h1>User Profile</h1><p>User ID: ${userId}</p>
        `);
});

//optional route parameter
app.get('/products/:productId?', (req, res) => {
    const productId = req.params.productId || 'default';
    res.send(`
    <h1>Product Page</h1>
    <p>Product ID: ${productId}</p>
  `);
});

//multiple route parameter
app.get("/posts/:category/:postId", (req, res) => {
    const category = req.params.category;
    const postId = req.params.postId;
    res.send(`
            <h1>Post Dashboard</h1><p>Category: ${category}</p><p>Post ID: ${postId}</p>
        `);
});

app.listen(PORT, () => {
    console.log(`server is listening at http://localhost:${PORT}`);
})