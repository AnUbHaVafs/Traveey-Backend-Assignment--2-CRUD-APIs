const express = require('express');
const router = express.Router();
const { createEmployee, getAllEmployees, updateEmployee, deleteEmployee } = require('../controllers/Employee');
const { fetchuser } = require('../middleware/Auth'); // <--- we can also fetch jwt token from request if pass as a middleware between the request and response in below apis

router.post('/employee', createEmployee);
router.get('/employee', getAllEmployees);
router.patch('/employee', updateEmployee);
router.delete('/employee', deleteEmployee);

module.exports = router;