// 1. /api/posts/create         ==> POST
// 2. /api/posts/delete         ==> DELETE
// 3. /api/posts/edit           ==> PUT
// 4. /api/posts/feed           ==> GET
// 5. /api/posts/:userId        ==> GET

const Post = require("../../models/post/post.model");

const createPost = async (req, res) => {
  try {
    const { description, location, active } = req.body;
    
    const userId = req.user.userId;

    const newPost = new Post({
      description,
      location,
      active,
      userId,
    });

    await newPost.save();

    res.status(201).json({
      post: newPost,
      message: "Post is created",
    });
  } catch (error) {
    console.log(error);
  }
};

const getAllPost = async (req, res) => {
  try {
    const allPostData = await Post.find();

    res.status(201).json({
      message: "Get all Post Data",
      allPostData: allPostData,
    });

  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createPost,
  getAllPost,
};