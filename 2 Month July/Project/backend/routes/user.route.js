
const express = require("express");
const { getUserProfile } = require("../controllers/user/user.controller");
const { verifyToken } = require('../utils/jwtfunctions');


const router = express.Router();

router.get('/getuserprofile' , verifyToken, getUserProfile)


module.exports = router 