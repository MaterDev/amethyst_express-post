// Gives us the express function, from the Express node module
const express = require('express');

// Create an instance of express, which is assigned to a variable.
const app = express();
//The port that we will use to acces our server, via Postman & Browser
const port = 5000;

// Express static file serving - public is the folder name
app.use(express.static('server/public'));

// Start up the server =
app.listen(port, () => {
    console.log('listening on port', port);
})