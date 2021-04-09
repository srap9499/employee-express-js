'use strict';

const express = require('express');

const router = express.Router();

// Employee Controller
const employeeController = require('./../controllers/employee.controller');

// Create Employee 
router.post('/', employeeController.create);

// Get all Employee
router.get('/', employeeController.findAll);

// Get Employee By Id
router.get('/:id', employeeController.findById);

// Update Employee
router.put('/:id', employeeController.update);


module.exports = router;