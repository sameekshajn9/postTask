const express = require('express');
const controller = require('./vote.controller');
const router = express.Router();

router.post('/upvote-task', controller.voteTask);
module.exports = router;
