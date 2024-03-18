const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  author: { type: Schema.Types.ObjectId, ref: "TherapistUser", required: true },
  createdAt: { type: Date, default: Date.now },
  title: { type: String, required: true },
  content: { type: String, required: true },
  category: { type: String },
  tags: [{ type: String }],
});

module.exports = mongoose.model("Article", articleSchema);
