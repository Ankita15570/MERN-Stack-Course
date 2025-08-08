const express = require("express");
const {
  loginUser,
  registerUser,
  forgetPassword,
  resetPassword,
  changePassword,
  verifyOtp,
} = require("../controllers/auth/auth.controller");

const router = express.Router();

router.post("/login", loginUser);
router.post("/register", registerUser);
router.post("/forget-password", forgetPassword);
router.post("/reset-password", resetPassword);
router.post("/change-password", changePassword);
router.post("/verify-Otp", verifyOtp);

module.exports = router;
