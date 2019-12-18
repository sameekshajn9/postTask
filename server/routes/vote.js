const express = require('express');
const controller = require('../controllers/votes');
const router = express.Router();

router.post('/upvoteTask', controller.upvoteTask);
