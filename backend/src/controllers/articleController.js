const Article = require("../models/article");

const createArticle = async (req, res) => {
  try {
    const { title, content, category, tags, author } = req.body;
    const article = new Article({ title, content, category, tags, author });
    await article.save();
    res.status(201).json({ message: "Article created", data: article });
  } catch (err) {
    if (err.name === "ValidationError") {
      res
        .status(400)
        .json({ message: "Invalid input. Please check your data." });
    } else {
      res.status(500).json({ message: "Internal server error." });
    }
  }
};

const getAllArticles = async (req, res) => {
  try {
    const articles = await Article.find();
    res.status(201).json({ message: "Article found", data: articles });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
const deleteArticle = async (req, res) => {
  try {
    const articleId = req.params.articleId;
    const deletedArticle = await Article.findByIdAndDelete(articleId);
    if (!deletedArticle) {
      return res.status(404).json({ message: "Article not found." });
    }
    res.json({ message: "Article deleted successfully.", deletedArticle });
  } catch (err) {
    res.status(500).json({ message: "Internal server error." });
  }
};
module.exports = { createArticle, getAllArticles, deleteArticle };
