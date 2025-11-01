const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

// Sample Route that throws a Custom Error
app.get("/error-demo", (req, res, next) => {
    try {
        throw new CustomError(400, "This is a custom error!");
    } catch (error) {
        next(error); // Pass error to the error-handling middleware
    }
});

// Global Error Handling Middleware
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(statusCode).json({
        success: false,
        error: {
            statusCode,
            message
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});