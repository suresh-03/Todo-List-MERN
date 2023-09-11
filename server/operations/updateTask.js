const todolist = require("../models/todolist");

// update task
const updateTask = async (req, res) => {
  // getting id from request
  const taskId = req.params.id;

  // getting data from req body
  const { task, date } = req.body;

  // updating task in database
  const updatedTask = await todolist.findByIdAndUpdate(taskId, {
    task,
    date,
  });

  // sending response as json
  res.json({ updatedTask });
};

module.exports = updateTask;
