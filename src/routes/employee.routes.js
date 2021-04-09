'use strict';

const express = require('express');

const router = express.Router();

// Employee Controller
const employeeController = require('./../controllers/employee.controller');

// Create Employee 
router.post('/', employeeController.create);


module.exports = router;