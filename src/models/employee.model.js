'use strict';

const dbConnect = require('./../../config/db.config');

// Employee Object
const Employee = function(employee) {
    this.first_name = employee.first_name;
    this.last_name = employee.last_name;
    this.email = employee.email;
    this.phone = employee.phone;
    this.organization = employee.organization;
    this.designation = employee.designation;
    this.salary = employee.salary;
    this.status = employee.status ? employee.status : 1;
    this.created_at = new Date();
    this.updated_at = new Date();
};

// Create new employee
Employee.create = (newEmployee, result) => {
    dbConnect.query('INSERT INTO employee set ?', newEmployee, (err, data) => {
        if (err) {
            console.log('Error: ', err);
            result(err, null);
        } else {
            console.log(data.insertId);
            result(null, data.insertId);
        }
    });
};

// Find All Employees
Employee.findAll = result => {
    dbConnect.query('SELECT * FROM employee', (err, data) => {
        if (err) {
            console.log('Error: ', err);
            result(err, null);
        } else {
            result(null, data);
        }
    });
};

// Get Employee By Id

Employee.findById = (id, result) => {
    dbConnect.query('SELECT * FROM employee WHERE id = ?', id, (err, data) => {
        if (err) {
            console.log('Error: ', err);
            result(err, null);
        } else {
            result(null, data);
        }
    });
};

// Update Employee 
Employee.update = (id, employee, result) => {
    dbConnect.query(`UPDATE employee SET
    first_name = ?, last_name = ?, email = ?, phone = ?, organization = ?, designation = ?,
    salary =? WHERE id = ?`,
    [employee.first_name, employee.last_name, employee.email, employee.phone,
    employee.organization, employee.designation, employee.salary, id], (err, data) => {
        if (err) {
            console.log('Error: ', err);
            result(err, null);
        } else {
            result(null, data);
        }
    });
};


module.exports = Employee;