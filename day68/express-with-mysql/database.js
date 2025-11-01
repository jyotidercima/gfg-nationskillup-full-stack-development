import mysql from 'mysql';

//create a mysql connection pool
const pool = mysql.createPool({
    host: 'localhost', // MYSQL_HOST you can also use 127.0.0.1
    user: 'root',
    password: 'YOUR_MYSQL_PASSWORD',
    database: 'notes_app' //define database name
}).promise();

//function to get all notes from the database
export async function getNotes() {
    //query to select all notes available in your database notes table
    const [rows] = await pool.query("SELECT * FROM notes");
    return rows;
}