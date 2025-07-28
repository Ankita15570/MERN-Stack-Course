const express = require('express');
const { createPost } = require('../controllers/post/post.controller');
const { verifyToken } = require('../utils/jwtfunctions');

const router = express.Router();

router.post('/create', verifyToken, createPost)

module.exports = router;