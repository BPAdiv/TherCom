const mongoose = require("mongoose");
// import mongoose, { Schema } from "mongoose";

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  userName: { type: String, required: true },
  role: { type: String, default: "client" },
});

module.exports = mongoose.model("TherapistUser", UserSchema);
