// server.js
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Database connection
const db = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'pharmacy'
});

db.connect(error => {
    if (error) throw error;
    console.log("Successfully connected to the database.");

    db.query("CREATE DATABASE IF NOT EXISTS pharmacy", (err, result) => {
        if (err) throw err;
        console.log("Database created or already exists.");
    });

    const createTableQuery = `
        CREATE TABLE IF NOT EXISTS medications (
            id INT AUTO_INCREMENT,
            name VARCHAR(255) NOT NULL,
            quantity INT NOT NULL,
            price DECIMAL(10, 2) NOT NULL,
            PRIMARY KEY (id)
        )
    `;
    db.query(createTableQuery, (err, result) => {
        if (err) throw err;
        console.log("Medications table created or already exists.");
    });
});

// CRUD Operations
// GET - Fetch all medications
app.get('/api/medications', (req, res) => {
    db.query('SELECT * FROM medications', (err, result) => {
        if (err) res.status(500).send(err);
        res.status(200).json(result);
    });
});

// POST - Add a new medication
app.post('/api/medications', (req, res) => {
    const { name, quantity, price } = req.body;
    db.query('INSERT INTO medications (name, quantity, price) VALUES (?, ?, ?)', [name, quantity, price], (err, result) => {
        if (err) res.status(500).send(err);
        res.status(201).send('Medication added.');
    });
});


// PUT - Update a medication
app.put('/api/medications/:id', (req, res) => {
    const { name, quantity, price } = req.body;
    db.query('UPDATE medications SET name = ?, quantity = ?, price = ? WHERE id = ?', [name, quantity, price, req.params.id], (err, result) => {
        if (err) res.status(500).send(err);
        res.status(200).send('Medication updated.');
    });
});

// DELETE - Delete a medication
app.delete('/api/medications/:id', (req, res) => {
    db.query('DELETE FROM medications WHERE id = ?', [req.params.id], (err, result) => {
        if (err) res.status(500).send(err);
        res.status(200).send('Medication deleted.');
    });
});

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

