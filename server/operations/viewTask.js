// importing models
const todolist = require("../models/todolist");

// view tasks
const viewTask = async (req, res) => {
  // getting task from database
  const tasks = await todolist.find();

  // sending json response
  res.json({ tasks });
};

module.exports = viewTask;
