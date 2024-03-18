// const axios = require("axios");
require("dotenv").config(); // .env file support for configuration
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRouter = require("./routes/userRouter");
const forumRouter = require("./routes/forumRouter");
const articleRouter = require("./routes/articleRouter");
const app = express();

// connect to db (mongodb + mongoose)
mongoose
  .connect(process.env.MONGO, {})
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log("unsucc");
    console.log(err);
  });

app.use(cors()); // allow cors origin
app.use(express.json());

app.use("/api/user", userRouter);
app.use("/api/forum", forumRouter);
app.use("/api/article", articleRouter);
// app.use("/api/product", productRouter);
// app.use("/api/telegram", telegramRouter);

app.use(express.json());

app.listen(process.env.PORT || 8000, () => console.log("listen on port 8000"));
