const Task = require("../models/Task");
const asyncHandler = require("express-async-handler");

// Get user tasks
const getTasks = asyncHandler(async (req, res) => {
  const tasks = await Task.find({ user: req.user.id });
  res.json(tasks);
});

// Create a task
const createTask = asyncHandler(async (req, res) => {
  const { title, description } = req.body;

  const task = await Task.create({
    user: req.user.id,
    title,
    description,
  });

  res.status(201).json(task);
});

// Update a task
const updateTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (!task || task.user.toString() !== req.user.id) {
    res.status(404);
    throw new Error("Task not found");
  }

  const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updatedTask);
});

// Delete a task
const deleteTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (!task || task.user.toString() !== req.user.id) {
    res.status(404);
    throw new Error("Task not found");
  }

  await task.remove();
  res.json({ message: "Task removed" });
});

module.exports = { getTasks, createTask, updateTask, deleteTask };
