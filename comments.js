// Create web server
// 1. Require express
// 2. Create an instance of express
// 3. Require comments
// 4. Create a route for /comments
// 5. Send comments back as JSON
// 6. Listen on port 3000

const express = require('express');
const comments = require('./comments');
const app = express();

app.get('/comments', (req, res) => {
    res.json(comments);
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});

// Run the server with node comments.js
// Open a browser and navigate to http://localhost:3000/comments
// You should see the comments in the browser

// To test the server with curl, run curl http://localhost:3000/comments in the terminal
