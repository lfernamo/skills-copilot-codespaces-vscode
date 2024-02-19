// Create web server


// 1. Create a web server
// 2. Create a route for the home page
// 3. Create a route for the about page

// 1. Create a web server
const express = require('express');
const app = express();

// 2. Create a route for the home page
app.get('/', (req, res) => {
    // return a external html file
    res.sendFile(__dirname + '/index.html');

});

// 3. Create a route for the about page
app.get('/about', (req, res) => {
    res.send('Welcome to the about page');
});

