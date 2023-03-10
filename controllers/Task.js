const Task = require('../models/taskModel');

exports.createTask = async (req, res) => {
    try {

        const isTaskexists = await Task.find({ title: req.body.title });
        if (isTaskexists) {
            // Each task cannot have multiple employees
            res.status(400).json({
                status: 'success',
                message: 'This task has already been created for another employee!'
            })
        }
        else {
            const task = {};
            if (req.body.title) task.title = req.body.title;
            if (req.body.description) task.description = req.body.description;
            if (req.body.dueDate) task.dueDate = req.body.dueDate;
            if (req.body.employeeId) task.employeeId = req.body.employeeId;

            const newTask = await Task.create(task);
            const record = await newTask.save();
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
    }
    catch (err) {
        res.status(400).json({
            status: "fail",
            message: err.message
        })
    }
}

exports.getAllTasks = async (req, res) => {
    try {
        const allTasks = await Task.find({});
        if (allTasks) {
            res.status(200).json({
                status: 'success',
                message: 'Records fetched Successfully!',
                data: allTasks
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


exports.updateTask = async (req, res) => {
    try {
        const taskId = req.body._id;
        const task = {};
        if (req.body.title) task.title = req.body.title;
        if (req.body.description) task.description = req.body.description;
        if (req.body.dueDate) task.dueDate = req.body.dueDate;
        if (req.body.employeeId) task.employeeId = req.body.employeeId;

        const record = await Task.findByIdAndUpdate(taskId, { $set: task }, { new: true });
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

exports.deleteTask = async (req, res) => {
    try {
        const taskId = req.body._id;
        const record = await Task.deleteOne({ _id: taskId });
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















