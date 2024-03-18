const express = require("express");
const supportGroupRouter = express.Router();
const supportGroupController = require("../controllers/supportGroupController");
// Route for creating a new article
supportGroupRouter.post("/", supportGroupController.createSupportGroup);

// Route for getting all articles
supportGroupRouter.get("/", supportGroupController.getAllSupportGroups);

// Other routes for updating, deleting, searching articles, etc.
supportGroupRouter.delete(
  "/:supportGroupId",
  supportGroupController.deleteSupportGroup
);
supportGroupRouter.put(
  "/add/:supportGroupId",
  supportGroupController.addParticipantGroup
);
supportGroupRouter.put(
  "/remove/:supportGroupId",
  supportGroupController.removeParticipantGroup
);

module.exports = supportGroupRouter;
