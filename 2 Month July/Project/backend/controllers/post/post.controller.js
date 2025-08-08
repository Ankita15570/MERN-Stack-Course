// 1 . /api/posts/craete      ===>POST
// 2 ./api/posts/delete      ===>DELETE
// 3 ./api/posts/edit        ===>PUT
// 4 ./api/posts/feed        ===>GET
// 5 ./api/posts/userId      ===>GET

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
      Post: newPost,
      message: "Post is Created",
    });
  } catch (error) {}
};

const getAllPost = async (req, res) => {
  try {
    const allPostData = await Post.find();

    res.status(201).json({
      message: " Get all Post Data",
      allPostData: allPostData,
    });
  } catch (error) {}
};

const getmypost = async (req, res) => {
  try {
    const userId = req.user.userId;
    const PostsData = await Post.find({ userId });

    res.status(201).json({
      message: "Get All My Post",
      mypostdata: PostsData,
    });
  } catch (error) {
    console.log(error.message);
  }
};

const updatePost = async (req, res) => {
  try {
    const userId = req.user.userId;

    const { description, location, active } = req.body;

    const updatepost = await Post.findByIdAndUpdate(
      userId,
      {
        description,
        location,
        active,
      },
      {
        new: true,
      }
    );

    res.status(201).json({
      message: "Post Updated",
      userData: updatepost,
    });
  } catch (error) {
    console.log(error.message);
    res.json({ message: error.message });
  }
};

const deletepost = async (req, res) => {
  try {
    const userId = req.user.userId;

    const PostsData = await Post.findByIdAndDelete(userId);

    res.status(201).json({ message: "Deleted Post" });
  } catch (error) {
    console.log(error.message);
    res.json({ message: error.message });
  }
};
module.exports = {
  createPost,
  getAllPost,
  getmypost,
  updatePost,
  deletepost,
};
