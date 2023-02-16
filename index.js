const express = require("express");
const app = express();
const cors = require("cors");
const { register, login } = require("./src/controllers/auth.controller");
const coursesController = require("./src/controllers/courses.controller");

app.use(cors());
app.use(express.json());
app.use("/courses", coursesController);

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

app.post("/register", register);
app.post("/login", login);

module.exports = app;
