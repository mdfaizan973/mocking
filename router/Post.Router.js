const express = require("express");
const PostRouter = express.Router();
const { PostModel } = require("../model/Post.model");

PostRouter.post("/add", async (req, res) => {
  const data = req.body;
  const post = new PostModel(data);
  await post.save();
  res.json("Post created");
});
PostRouter.get("/", async (req, res) => {
  try {
    const data = await PostModel.find();
    res.send(data);
  } catch (err) {
    console.log(err);
  }
});
module.exports = { PostRouter };
