const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ForumPostSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: "TherapistUser", required: true },
  createdAt: { type: Date, default: Date.now },
  comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }], // Reference to comments
  likes: { type: Number, default: 0 },
});

module.exports = mongoose.model("ForumPost", ForumPostSchema);
