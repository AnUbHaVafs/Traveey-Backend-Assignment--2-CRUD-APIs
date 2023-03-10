const mongoose = require('mongoose');
const { Schema } = mongoose;

const EmployeeSchema = new Schema({
    name: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false,
        unique: true
    },
    phone: {
        type: String,
        required: true,
        unique: true,
        max: 10,
        min: 10
    },
    position: {
        type: String,
        required: false
    },
    hireDate: {
        type: String,
        required: false
    },
    // optional field below: To differentiate between the users and the admin.

    // usertype: {
    //     type: String,
    //     enum: ['customer', 'admin'],
    //     required: true,
    //     lowercase: true
    // },
    createdAt: {
        type: Date,
        default: Date.now
    }
});
const Employee = mongoose.model('employee', EmployeeSchema);
module.exports = Employee;