const express = require('express');
const controller = require('./task.controller');
const router = express.Router();

router.post('/postTask', controller.postTask);
