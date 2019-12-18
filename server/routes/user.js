const express = require('express');
const controller = require('../controllers/users');
const router = express.Router();

router.post('/checkUser', controller.checkUserIsExisting);
