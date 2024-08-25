const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());

// POST /bfhl endpoint
app.post('/bfhl', (req, res) => {
    const data = req.body.data || [];
    const user_id = "john_doe_17091999";
    const email = "john@xyz.com";
    const roll_number = "ABCD123";

    const numbers = data.filter(item => !isNaN(item)).map(String);
    const alphabets = data.filter(item => /^[a-zA-Z]$/.test(item));
    const highest_lowercase_alphabet = alphabets.filter(item => /^[a-z]$/.test(item));
    const highestLowercase = highest_lowercase_alphabet.length ? [highest_lowercase_alphabet.sort().pop()] : [];

    const response = {
        is_success: true,
        user_id: user_id,
        email: email,
        roll_number: roll_number,
        numbers: numbers,
        alphabets: alphabets,
        highest_lowercase_alphabet: highestLowercase
    };

    res.json(response);
});

// GET /bfhl endpoint
app.get('/bfhl', (req, res) => {
    const response = {
        operation_code: 1
    };
    res.status(200).json(response);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
