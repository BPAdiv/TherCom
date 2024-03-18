// const SupportGroup = require("../models/supportGrou/p");
const SupportGroup = require("../models/supportGroup");
const createSupportGroup = async (req, res) => {
  try {
    const { title, scheduled, createdBy } = req.body;
    const supportGroup = new SupportGroup({
      title,
      scheduled,
      createdBy,
    });
    await supportGroup.save();
    res
      .status(201)
      .json({ message: "SupportGroup created", data: supportGroup });
  } catch (error) {
    console.log(error.message);
    if (err.name === "ValidationError") {
      res
        .status(400)
        .json({ message: "Invalid input. Please check your data." });
    } else {
      res.status(500).json({ message: "Internal server error." });
    }
  }
};

const getAllSupportGroups = async (req, res) => {
  try {
    const supportGroups = await SupportGroup.find();
    res
      .status(201)
      .json({ message: "SupportGroup found", data: supportGroups });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};
const deleteSupportGroup = async (req, res) => {
  try {
    const supportGroupId = req.params.supportGroupId;
    const deletedSupportGroup = await SupportGroup.findByIdAndDelete(
      supportGroupId
    );
    if (!deletedSupportGroup) {
      return res.status(404).json({ message: "SupportGroup not found." });
    }
    res.json({
      message: "SupportGroup deleted successfully.",
      deletedSupportGroup,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Internal server error." });
  }
};
const addParticipantGroup = async (req, res) => {
  try {
    const { participantId } = req.body;
    const supportGroupId = req.params.supportGroupId;

    const supportGroup = await SupportGroup.findByIdAndUpdate(
      supportGroupId,
      {
        $push: { participants: participantId },
      },
      { new: true }
    );
    // const post = await ForumPost.findById(postId);
    //     if (!post) return res.status(404).json({ message: "no post found" });
    //     post.comments.push(newComment._id);
    //     const savedPost = await post.save();
    // Check if post exists
    if (!supportGroup) {
      return res.status(404).json({ message: "No supportGroup found" });
    }

    // Return success message with saved   supportGroup data
    res
      .status(201)
      .json({ message: "Participant added created", data: { supportGroup } });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
const removeParticipantGroup = async (req, res) => {
  try {
    const { participantId } = req.body;
    const supportGroupId = req.params.supportGroupId;

    const supportGroup = await SupportGroup.findByIdAndUpdate(
      supportGroupId,
      { $pull: { participants: participantId } },
      { new: true }
    );
    // const post = await ForumPost.findById(postId);
    //     if (!post) return res.status(404).json({ message: "no post found" });
    //     post.comments.push(newComment._id);
    //     const savedPost = await post.save();
    // Check if post exists
    if (!supportGroup) {
      return res.status(404).json({ message: "No supportGroup found" });
    }

    // Return success message with saved   supportGroup data
    res
      .status(201)
      .json({ message: "Participant removed ", data: { supportGroup } });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
module.exports = {
  createSupportGroup,
  getAllSupportGroups,
  deleteSupportGroup,
  addParticipantGroup,
  removeParticipantGroup,
};
