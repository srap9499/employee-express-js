'use strict';

const Employee = require('./../models/employee.model');

exports.create = (req, res) => {
    const new_employee = new Employee(req.body);

    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error:true, message: 'Please Provide all required field' });
    } else {
        Employee.create(new_employee, (err, employee) => {
            if (err) {
                res.send(err);
            } else {
                res.json({error:false,message:'Employee added successfully!',data:employee});
            }
        });
    }
};

exports.findAll = (req, res) => {
    Employee.findAll((err, employee) => {
        if (err) {
            res.send(err);
        } else {
            res.send(employee);
        }
    });
};