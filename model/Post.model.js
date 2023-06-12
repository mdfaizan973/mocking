const mongoose = require("mongoose");
const PostSchma = mongoose.Schema(
  {
    title: { type: String, require: true },
    body_id: { type: String, require: true },
  },
  {
    versionKey: false,
  }
);

const PostModel = mongoose.model("post", PostSchma);

module.exports = { PostModel };
