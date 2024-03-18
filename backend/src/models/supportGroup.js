const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const supportGroupSchema = new Schema({
  title: { type: String, required: true },
  scheduled: { type: String, required: true },
  //   scheduledTime: { type: Date , required: true },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: "TherapistUser",
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
  participants: [{ type: Schema.Types.ObjectId, ref: "TherapistUser" }],
  teamsLink: { type: String },

  // Additional fields as needed
});
module.exports = mongoose.model("SupportGroup", supportGroupSchema);
