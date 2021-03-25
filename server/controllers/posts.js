const PostInfo = require('../models/postInfo.js');

exports.getPosts = async (req, res) => {
     // res.send('get posts');
     try {
          const posts = await PostInfo.find();
          res.status(200).json(posts);
     } catch (error) {
          res.status(404).json(error.message);
     }
}

exports.createPost = async (req, res) => {
     console.log(req.body);
     const post = req.body;

     const newPost = new PostInfo(post);
     try {
          await newPost.save();
          res.status(201);
     } catch (error) {
          res.status(409).json({message: error.message});
     }
     // res.send('create post');
}