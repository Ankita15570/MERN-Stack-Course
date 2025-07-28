//1. /api/post/create  ==>POST
//2. /api/post/delete  ==>DELETE
//3. /api/post/edit    ==>PUT
//4. /api/post/feed    ==>GET
//5. /api/post/userId  ==>GET

const Post = require('../../models/post/post.model');

const createPost = async (req, res) => {
    try {
        const userId = req.user.id;

        const newPost = new Post({
            descriptio,
            location,
            active,
            userId
        });

        await newPost.save()

        res.status(201).json({
            post: newPost,
            message: "Post created successfully"
        })

    } catch (error) {
        console.log(error)
    }
};

module.exports = {
    createPost
};
