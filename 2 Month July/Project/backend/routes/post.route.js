const express = require("express");
const { createPost, getAllPost, getmypost, deletepost, updatePost } = require("../controllers/post/post.controller");
const { verifyToken } = require("../utils/jwtFunctions");


const router = express.Router();

router.post("/create-post", verifyToken ,createPost);
router.get("/get-all-post-feed", verifyToken ,getAllPost);
router.get("/get-my-post", verifyToken ,getmypost);
router.delete("/delete-post", verifyToken ,deletepost);
router.put("/update-post", verifyToken ,updatePost);

module.exports = router;