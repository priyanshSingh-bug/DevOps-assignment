const express = require("express");
const mongoose = require("mongoose");
const taskRoutes = require("./routes/taskRoutes");
const app = express();
require("dotenv").config();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

app.use("/api/tasks", taskRoutes);

app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK" });
});

module.exports = app;
