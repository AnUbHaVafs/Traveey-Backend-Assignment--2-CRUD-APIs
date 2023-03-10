const express = require('express');
const router = express.Router();
const { createTask, getAllTasks, updateTask, deleteTask } = require('../controllers/Task');
const { fetchuser } = require('../middleware/Auth'); // <--- we can also fetch jwt token from request if pass as a middleware between the request and response in below apis

router.post('/task', createTask);
router.get('/task', getAllTasks);
router.patch('/task', updateTask);
router.delete('/task', deleteTask);

module.exports = router;