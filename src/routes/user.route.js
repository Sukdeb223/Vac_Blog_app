const express = require('express');
const { startSession } = require('mongoose');
const router = express.Router();

const UserController = require('../controllers/user.controllers');
router.get('/', UserController.getUserList);

module.exports = router;