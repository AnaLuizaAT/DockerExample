const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

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

app.get("/phrases", (req, res) => {
  const query = "SELECT * FROM phrases ORDER BY id DESC LIMIT 5";
  db.query(query, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

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
