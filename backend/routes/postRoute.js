const express = require("express");
const {
  getPost,
  deletePost,
  addPost,
} = require("../controllers/postController");

const postRoute = express.Router();

postRoute.route("/").get(getPost).delete(deletePost).post(addPost);

module.exports = postRoute;
