const Employee = require('../models/employeeModel');

exports.createEmployee = async (req, res) => {
    try {
        const employee = {};
        if (req.body.name) employee.name = req.body.name;
        if (req.body.email) employee.email = req.body.email;
        if (req.body.phone) employee.phone = req.body.phone;
        if (req.body.position) employee.position = req.body.position;
        if (req.body.hireDate) employee.hireDate = req.body.hireDate;
        const newEmployee = await Employee.create(employee);
        const record = await newEmployee.save();
        if (record) {
            res.status(200).json({
                status: 'success',
                message: 'Record created Successfully!',
                data: record
            })
        }
        else {
            res.status(400).json({
                status: 'fail',
                message: 'Record not created successfully!'
            })
        }
    }
    catch (err) {
        res.status(400).json({
            status: "fail",
            message: err.message
        })
    }
}

exports.getAllEmployees = async (req, res) => {
    try {
        const allEmployees = await Employee.find({});
        if (allEmployees) {
            res.status(200).json({
                status: 'success',
                message: 'Records fetched Successfully!',
                data: allEmployees
            })
        }
        else {
            res.status(400).json({
                status: 'fail',
                message: 'Records not fetched successfully!'
            })
        }
    }
    catch (err) {
        res.status(400).json({
            status: "fail",
            message: err.message
        })
    }
}


exports.updateEmployee = async (req, res) => {
    try {
        const employeeId = req.body._id;
        const employee = {};
        if (req.body.name) employee.name = req.body.name;
        if (req.body.email) employee.email = req.body.email;
        if (req.body.phone) employee.phone = req.body.phone;
        if (req.body.position) employee.position = req.body.position;
        if (req.body.hireDate) employee.hireDate = req.body.hireDate;
        const record = await Employee.findByIdAndUpdate(employeeId, { $set: employee }, { new: true });
        if (record) {
            res.status(200).json({
                status: 'success',
                message: 'Record updated Successfully!',
                data: record
            })
        }
        else {
            res.status(400).json({
                status: 'fail',
                message: 'Record not updated successfully!'
            })
        }
    }
    catch (err) {
        res.status(400).json({
            status: "fail",
            message: err.message
        })
    }
}

exports.deleteEmployee = async (req, res) => {
    try {
        const employeeId = req.body._id;
        const record = await Employee.deleteOne({ _id: employeeId });
        if (record) {
            res.status(200).json({
                status: 'success',
                message: 'Record delete Successfully!',
                data: record
            })
        }
        else {
            res.status(400).json({
                status: 'fail',
                message: 'Record not delete successfully!'
            })
        }
    }
    catch (err) {
        res.status(400).json({
            status: "fail",
            message: err.message
        })
    }
}















