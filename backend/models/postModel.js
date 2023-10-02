const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  destination: { type: String, required: true },
  NumberOfTraverls: { type: Number, required: true },
  BudgetPerPerson: { type: Number, required: true },
});

const Post = mongoose.model("post", postSchema);

module.exports = Post;
