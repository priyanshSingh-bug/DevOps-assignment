const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  status: { type: String, enum: ["completed", "pending"], default: "pending" }
}, { timestamps: true });

module.exports = mongoose.model("Task", taskSchema);
