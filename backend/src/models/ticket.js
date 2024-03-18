const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
  ticketUser: {
    type: Schema.Types.ObjectId,
    ref: "TherapistUser",
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
  title: { type: String, required: true },
  content: { type: String, required: true },
});

module.exports = mongoose.model("Ticket", ticketSchema);
