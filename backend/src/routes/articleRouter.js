const express = require("express");
const articlesRouter = express.Router();
const articleController = require("../controllers/articleController");
// Route for creating a new article
articlesRouter.post("/", articleController.createArticle);

// Route for getting all articles
articlesRouter.get("/", articleController.getAllArticles);

// Other routes for updating, deleting, searching articles, etc.
articlesRouter.delete("/:articleId", articleController.deleteArticle);
module.exports = articlesRouter;
