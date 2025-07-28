const express = require('express');
const { getUserProfile } = require('../controllers/user/user.controller');

const router = express.Router();
router.get("/getuserprofile", getUserProfile)

module.exports = router;