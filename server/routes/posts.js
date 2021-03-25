const express = require('express');
const PostController = require('../controllers/posts.js');

const router = express.Router();

router.get('/', PostController.getPosts);
router.post('/', PostController.createPost);

module.exports = router;