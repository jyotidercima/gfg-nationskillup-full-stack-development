import express, { json } from "express";
import { getNotes } from "./database.js";

const app = express();
const port = process.env.PORT || 3000;

//Route to fetch all notes from MySQL DB
app.get('/notes', async (req, res) => {
    const notes = await getNotes();
    return res.status(200).json({
        success: true,
        message: "Notes fetched successfully",
        notes: notes
    });
});

//Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
