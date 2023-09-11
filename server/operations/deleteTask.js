// importing models
const todolist = require("../models/todolist");

// deleting task by id
const deleteTask = async (req, res) => {
  // getting requested id
  const taskId = req.params.id;

  // deleting task from db
  const deletedTask = await todolist.findByIdAndDelete(taskId);

  // sending response as json
  res.json({ deletedTask });
};

module.exports = deleteTask;
