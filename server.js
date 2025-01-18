const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the 'shoe_store-main' directory
app.use(express.static(path.join(__dirname, 'shoe_store-main')));

// Serve 'account.html' at the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'shoe_store-main', 'index.html'));
});

// Handle login form submission
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    console.log('Login Attempt:', username, password);
    // Handle login logic here (e.g., verify username/password)
    res.send('Login successful');
});

// Handle register form submission
app.post('/register', (req, res) => {
    const { username, email, password } = req.body;
    console.log('Registration Attempt:', username, email, password);
    // Handle registration logic here (e.g., save to a database)
    res.send('Registration successful');
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
