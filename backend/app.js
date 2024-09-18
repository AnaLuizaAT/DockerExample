const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors()); // Enable CORS for any origin

// Connect to MySQL database
const db = mysql.createConnection({
  host: "db",
  user: "root",
  password: "example",
  database: "phrasesdb",
});

db.connect((err) => {
  if (err) throw err;
  console.log("Connected to the MySQL database");
});

// Endpoint to add a phrase
app.post("/add", (req, res) => {
  const phrase = req.body.phrase;
  if (!phrase) {
    return res.status(400).send("No phrase provided");
  }
  const query = "INSERT INTO phrases (text) VALUES (?)";
  db.query(query, [phrase], (err) => {
    if (err) throw err;
    res.status(201).json({ message: "Phrase added successfully" });
  });
});

// Endpoint to fetch the last 5 phrases
app.get("/phrases", (req, res) => {
  const query = "SELECT * FROM phrases ORDER BY id DESC LIMIT 5";
  db.query(query, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Endpoint to fetch all phrases
app.get("/phrases/all", (req, res) => {
  const query = "SELECT * FROM phrases ORDER BY id DESC";
  db.query(query, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});