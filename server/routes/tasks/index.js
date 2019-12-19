const express = require('express');
const controller = require('./task.controller');
const router = express.Router();

router.post('/post-task', controller.createTask);
router.post('/get-all-tasks', controller.getAllPosts);
module.exports = router;
