const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'));

app.get('/next', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'next.html'));
});

app.listen(3000, () => {
    console.log("Server is running at http://localhost:3000");
});