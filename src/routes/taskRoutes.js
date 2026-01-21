const express = require("express");
const Task = require("../models/Task");
const router = express.Router();

//for creating task
router.post("/", async (req, res) => {
  try {
    const task = await Task.create(req.body);

    res.status(201).json({
      success: true,
      message: "Task created successfully",
      data: task
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to create task",
      error: error.message
    });
  }
});

//for getting tasks 
router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find();

    res.status(200).json({
      success: true,
      message: "Tasks fetched successfully",
      data: tasks
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch tasks",
      error: error.message
    });
  }
});


//for updating any field of task
router.put("/:id", async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id,req.body,{ new: true });
    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Task updated successfully",
      data: task
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to update task",
      error: error.message
    });
  }
});

//to delete the task based on id
router.delete("/:id", async (req, res) => {
 try {
    const task = await Task.findByIdAndDelete(req.params.id);

    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Task deleted successfully"
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to delete task",
      error: error.message
    });
  }
});

module.exports = router;
