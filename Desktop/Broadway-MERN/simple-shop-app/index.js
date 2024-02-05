require("dotenv").config();
const express = require("express");
const PORT = Number(process.env.PORT);
const router = require("./routes/routes");
const morgan = require("morgan");
const apiVersion = "/api/v1";

const app = express();

app.use(express.json());
app.use("/", express.static("public"));
app.use(morgan("dev"));

app.use(`${apiVersion}`, router);

app.use((err, req, res, next) => {
  error = err ? err.toString() : "Something wend wrong ";
  res.status(200).json({ message: error });
});

app.listen(PORT, (req, res) => {
  console.log(`The app is running at http://localhost:${PORT}`);
});
