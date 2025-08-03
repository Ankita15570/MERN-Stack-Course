const User = require("../../auth/user/controller");

const getUserProfile = async (req, res) => {
  try {
    const userId = req.user.userId;
    const userData = await User.findById(userId).select("-password -resetOtp -resetOtpExpiration -otpSentCount");

    if (!userData) {
      return res.status(401).json({ message: "User not found" });
    }

    res.status(201).json({ message: "User profile retrieved successfully", userData });
  } catch (error) {
    console.error("Get user profile error:", error);
    res.status(401).json({ message: "Server error during profile retrieval" });
  }
};

module.exports = {
  getUserProfile,
};