const express = require("express");
const { getUserProfile, updateuserprofile, deleteUserProfile } = require("../controllers/user/user.controller");
const { verifyToken } = require("../utils/jwtFunctions");

const router = express.Router();
router.get("/getuserprofile", verifyToken ,getUserProfile)
router.put("/update-user-profile", verifyToken ,updateuserprofile),
router.delete("/delete-User-Profile" , verifyToken , deleteUserProfile)



module.exports = router;