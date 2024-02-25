require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const router = require("./Route/route");
const apiVersion = "api/v1";
const app = express();

app.use(express.json());

mongoose.connect(process.env.DB).then((req, res, next) => {
  console.log("database connection successfull");
});
app.use(morgan("dev"));
app.use(express.static("public")); // enabling our app to serve static file and setting public directory as the root directory
app.use(`/${apiVersion}`, router);
// app.use(morgan("dev"));

app.use((error, req, res, next) => {
  const err = error ? error.toString() : "something wend wrong";
  res.status(500).json({ message: err });
});

app.listen(process.env.PORT, () => {
  console.log(`The server is running on http://localhost:${process.env.PORT}`);
});
