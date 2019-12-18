const express = require('express');
const controller = require('../controllers/tasks');
const router = express.Router();

router.post('/postTask', controller.postTask);
