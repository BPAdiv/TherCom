const express = require("express");
const userRouter = express.Router();
const {
  register,
  login,
  verifyToken,
  //   contactUsEmail,
  updateUser,
} = require("../controllers/authControllers.js");

userRouter.post("/signup", register);
userRouter.post("/login", login);
userRouter.post("/auth", verifyToken);
// // userRouter.post("/contact", contactUsEmail);
userRouter.post("/updateUser", updateUser);

module.exports = userRouter;
