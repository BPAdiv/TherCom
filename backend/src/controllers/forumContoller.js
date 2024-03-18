const User = require("../models/users");
const Comment = require("../models/comment");
const ForumPost = require("../models/forumPost");

const newPost = async (req, res) => {
  //   const { title, content, author } = req.body;
  try {
    const newForumPost = new ForumPost(req.body);
    const savedForumPost = await newForumPost.save();
    if (!savedForumPost)
      return res.status(400).json({ message: "Failed to save forum post" });
    res
      .status(201)
      .json({ message: "Forum post created", data: savedForumPost });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
const newComment = async (req, res) => {
  try {
    const { content, author, postId } = req.body;

    const newComment = new Comment({ content, author });

    const post = await ForumPost.findByIdAndUpdate(
      postId,
      {
        $push: { comments: newComment._id },
      },
      { new: true }
    );
    // const post = await ForumPost.findById(postId);
    //     if (!post) return res.status(404).json({ message: "no post found" });
    //     post.comments.push(newComment._id);
    //     const savedPost = await post.save();
    // Check if post exists
    if (!post) {
      return res.status(404).json({ message: "No post found" });
    }
    const savedComment = await newComment.save();

    // Check if saving was successful
    if (!savedComment) {
      return res.status(400).json({ message: "Failed to save comment" });
    }

    // Return success message with saved comment and post data
    res
      .status(201)
      .json({ message: "Comment created", data: { savedComment, post } });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
const deleteComment = async (req, res) => {
  try {
    const { commentId } = req.body;
    const postId = req.params.postId;

    const forumPost = await ForumPost.findByIdAndUpdate(
      postId,
      { $pull: { comments: commentId } },
      { new: true }
    );
    await Comment.findByIdAndDelete(commentId);
    // const post = await ForumPost.findById(postId);
    //     if (!post) return res.status(404).json({ message: "no post found" });
    //     post.comments.push(newComment._id);
    //     const savedPost = await post.save();
    // Check if post exists
    if (!forumPost) {
      return res.status(404).json({ message: "No supportGroup found" });
    }

    // Return success message with saved   supportGroup data
    res.status(201).json({ message: "comment removed ", data: { forumPost } });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
//
const getPosts = async (req, res) => {
  try {
    const forumPosts = await ForumPost.find().populate("comments");
    if (!forumPosts || forumPosts.length === 0) {
      return res.status(404).json({ message: "No posts found" });
    }
    res.status(201).json({ message: "Posts found", data: forumPosts });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
const getPostById = async (req, res) => {
  try {
    const postId = req.params.postId;

    const post = await ForumPost.findById(postId).populate("comments");

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.status(200).json({ message: "Post found", data: post });
  } catch (error) {
    console.log("Error:", error.message);

    res.status(500).json({ message: "Internal server error" });
  }
};

const updatePost = async (req, res) => {
  try {
    const { postId, likes, content, comment } = req.body;
    const forumPost = await ForumPost.findByIdAndUpdate(
      postId,
      { likes, content },
      { new: true }
    );
    if (!forumPost) {
      return res.status(400).json({ message: "post wasnt found" });
    }
    res.status(201).json({ message: "post found", data: forumPost });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
const toggleLikePost = async (req, res) => {
  try {
    const postId = req.params.postId;
    const { action } = req.body; // 'like' or 'dislike'
    const post = await ForumPost.findById(postId);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    if (action !== "like" || action === "dislike") {
      return res.status(400).json({ message: "Invalid action" });
    }
    action === "like" ? (post.likes += 1) : (post.likes -= 1);
    // if (action === "like") {
    //   post.likes += 1;
    // } else if (action === "dislike") {
    //   if (post.likes > 0) {
    //     post.likes -= 1;
    //   }
    // } else {
    //   return res.status(400).json({ message: "Invalid action" });
    // }

    const updatedPost = await post.save();

    res
      .status(200)
      .json({ message: `${action} added to post`, data: updatedPost });
  } catch (error) {
    console.log("Error:", error.message);

    res.status(500).json({ message: "Internal server error" });
  }
};

const deletePostById = async (req, res) => {
  try {
    const postId = req.params.postId;

    const post = await ForumPost.findById(postId);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    await Comment.deleteMany({ _id: { $in: post.comments } });

    const deletedPost = await ForumPost.findByIdAndDelete(postId);

    if (!deletedPost) {
      return res.status(404).json({ message: "Failed to delete post" });
    }
    res.status(200).json({
      message: "Post and associated comments deleted",
      data: deletedPost,
    });
  } catch (error) {
    console.log("Error:", error.message);

    res.status(500).json({ message: "Internal server error" });
  }
};
module.exports = {
  newPost,
  newComment,
  getPosts,
  getPostById,
  toggleLikePost,
  updatePost,
  deletePostById,
  deleteComment,
};
