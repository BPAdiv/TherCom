const express = require("express");
const forumRouter = express.Router();
const {
  newPost,
  newComment,
  getPosts,
  getPostById,
  updatePost,
  toggleLikePost,
  deletePostById,
  deleteComment,
} = require("../controllers/forumContoller");

forumRouter.post("/newPost", newPost);
forumRouter.post("/newComment", newComment);
forumRouter.get("/getPosts", getPosts);
forumRouter.get("/getPost/:postId", getPostById);
forumRouter.post("/updatePost", updatePost);
forumRouter.put("/toggleLike/:postId", toggleLikePost);
forumRouter.put("/removeComment/:postId", deleteComment);
forumRouter.delete("/deletePost/:postId", deletePostById);

module.exports = forumRouter;
