'use strict';

const express = require('express');

// Creating express app
const app = express();

// Setting server port
const port = process.env.PORT || 3000;

// Parse Content (as body parser)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello world');
});



app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
});