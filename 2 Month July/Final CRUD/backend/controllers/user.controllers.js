const User = require("../models/user.models");

const createUser = async (req, res) => {
  try {
    const { name, email, mobileNo, age } = req.body;

    const userData = await User({
      name,
      email,
      mobileNo,
      age,
    });
    await userData.save();

    res.status(201).json({ data: userData, message: "Created User" });
  } catch (error) {
    console.log(error);
  }
};

const getAllUsers = async (req, res) => {
  try {
    const allUserData = await User.find();
    res.status(201).json({ data: allUserData, message: "Get All Users Data" });
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    const { userId } = req.query;

    console.log(userId, "userId");

    const userData = await User.findByIdAndDelete(userId);

    console.log(userData, "userData");

    res.status(201).json({ message: "User Deleted" });
  } catch (error) {
    console.log(error);
  }
};

const updateUser = async (req, res) => {
  try {
    const { userId } = req.query;

    const { name, email, mobileNo, age } = req.body;

    await User.findByIdAndUpdate(userId, {
      name,
      email,
      mobileNo,
      age,
    });

    res.status(201).json({ message: "Updated Record" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createUser,
  getAllUsers,
  deleteUser,
  updateUser,
};