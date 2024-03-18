const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const sgMail = require("@sendgrid/mail");
const User = require("../models/users");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const register = async (req, res) => {
  try {
    const { email, password, userName, role } = req.body;
    const hash = await bcrypt.hash(password, 10);
    const tempUser = { email, password: hash, userName };
    if (role) {
      tempUser.role = role;
    }
    const newUser = new User(tempUser);
    const savedUser = await newUser.save();
    if (!savedUser)
      return res.status(400).json({ message: "User already exists" });
    const token = jwt.sign({ id: savedUser._id }, process.env.JWT_);
    res.status(201).json({ message: "user created", data: savedUser, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const loginUser = await User.findOne({ email: req.body.email });
    if (!loginUser)
      return res.status(400).json({ message: "User does not exist" });
    const bcryptPassword = await bcrypt.compare(
      req.body.password,
      loginUser.password
    );
    if (!bcryptPassword)
      return res.status(400).json({ message: "Invalid password or email" });
    const token = jwt.sign({ id: loginUser._id }, process.env.JWT_);
    // if (req.body.telegramId) {
    //   loginUser.telegramId = req.body.telegramId;
    //   const savedUserLogin = await loginUser.save();
    //   if (!savedUserLogin) {
    //     return res.status(200).json({
    //       message: "You are In but could not update telegramId",
    //       data: loginUser,
    //       token,
    //     });
    //   }
    // }
    res.status(200).json({ message: "You are In", data: loginUser, token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const { email, userName, userId } = req.body;
    const update = { email, userName };
    !email && delete update.email;
    !userName && delete update.userName;
    const updateUser = await User.findByIdAndUpdate(userId, update, {
      new: true,
    });
    if (!updateUser)
      return res.status(400).json({ message: "User does not exist" });
    res.status(201).json({ message: "updateUser updated", updateUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const checkToken = async (token) => {
  try {
    if (!token) return;
    const decoded = jwt.verify(token, process.env.JWT_);
    if (!decoded.id) return;

    const user = await User.findById(decoded.id);
    if (!user) return;
    return user;
  } catch (err) {
    if (err.name === "TokenExpiredError") {
      console.log("Token expired");
    } else {
      console.error(err);
    }
  }
};

const verifyToken = async (req, res) => {
  const authorizationHeader = req.headers.authorization;

  if (!authorizationHeader) {
    return res.status(401).send({ message: "Unauthorized" });
  }

  const token = authorizationHeader.split(" ")[1];

  try {
    const user = await checkToken(token);

    if (!user) {
      return res.status(401).send({ message: "Unauthorized" });
    }

    res.status(200).json({ user });
  } catch (error) {
    return res.status(401).send({ message: "Unauthorized" });
  }
};

// const contactUsEmail = async (req, res) => {
//   const { email, subject, emailContent } = req.body;
//   const msg = {
//     to: "bargainhiveapp@gmail.com",
//     from: "bargainhiveapp@gmail.com",
//     subject: `Contact Us from ${email} ${subject}`,
//     text: emailContent,
//     html: `<p>${emailContent}</p>`,
//   };

//   try {
//     const mail = await sgMail.send(msg);
//     return res.status(200).json({ message: "success", mail });
//   } catch (error) {
//     if (error.response) {
//       console.error(error.response.body);
//       res.status(500).json({ message: error.message });
//     }
//   }
// };

module.exports = {
  register,
  login,
  updateUser,
  verifyToken,
  //   contactUsEmail,
};
