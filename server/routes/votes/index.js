const express = require('express');
const controller = require('./vote.controller');
const router = express.Router();

router.post('/upvoteTask', controller.upvoteTask);
