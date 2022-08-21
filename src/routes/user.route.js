const express = require('express');
const router = express.Router();

const UserController = require('../controllers/user.controllers');

// get all user
router.get('/', UserController.getUserList);

// create new user
router.post('/', UserController.createNewUser);

module.exports = router;