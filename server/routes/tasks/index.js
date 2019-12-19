const express = require('express');
const controller = require('./task.controller');
const router = express.Router();

router.post('/post-task', controller.createTask);
module.exports = router;
