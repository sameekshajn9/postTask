const express = require('express');
const controller = require('./user.controller');
const router = express.Router();

router.post('/check-user', controller.verifyUsername);
module.exports = router;
