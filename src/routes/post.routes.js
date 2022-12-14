const express = require('express');
const router = express.Router();

const PostController = require('../controllers/post.controllers');
router.get('/', PostController.getAllPosts);

module.exports = router;