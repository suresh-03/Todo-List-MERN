// importing models
const todolist = require("../models/todolist");

// creating task
const createTask = async (req, res) => {
  // getting data from request body
  const { task, date } = req.body;

  // creating data in db
  const newTask = await todolist.create({
    task,
    date,
  });

  // sending response as json
  res.json({ newTask });
};

module.exports = createTask;
