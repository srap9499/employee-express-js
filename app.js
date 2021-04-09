'use strict';

const express = require('express');

// Creating express app
const app = express();

// Setting server port
const port = process.env.PORT || 3000;

// importing routes
const employeeRouter = require('./src/routes/employee.routes');


// Parse Content (as body parser)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello world');
});

// Using employee router
app.use('/employee', employeeRouter);


app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
});