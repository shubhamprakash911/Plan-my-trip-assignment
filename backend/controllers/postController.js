const asyncHandler = require("../middlewares/asyncHandler");
const Post = require("../models/postModel");

const addPost = asyncHandler(async (req, res) => {
  const post = await Post.create(req.body);
  res.json({ success: true, data: post });
});

const getPost = asyncHandler(async (req, res) => {
  const post = await Post.find();
  res.json({ success: true, data: post });
});

const deletePost = asyncHandler(async (req, res) => {
  const post = await Post.findByIdAndDelete(req.params.id);
  res.json({ success: true, data: post });
});

module.exports = { addPost, getPost, deletePost };
