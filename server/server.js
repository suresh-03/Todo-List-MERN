// importing libraries
const express = require("express");
const cors = require("cors");

// configuring .env using dotenv library
require("dotenv").config();

// initializing express app
const app = express();

// making app to use cors
app.use(cors());

// making app to use json
app.use(express.json());

// connecting database
const connectionToDB = require("./connectionDB/connection");

// creating connection
connectionToDB();

// getting operations
const viewTask = require("./operations/viewTask");
const createTask = require("./operations/createTask");
const updatedTask = require("./operations/updateTask");
const deleteTask = require("./operations/deleteTask");

// making api

// view task
app.get("/",viewTask);
app.get("/viewTask",viewTask);

// create task
app.post("/createTask",createTask);

// update task
app.put("/updateTask/:id",updatedTask);

// delete task
app.delete("/deleteTask/:id",deleteTask);

app.listen(process.env.PORT,() => console.log(`listening in port ${process.env.PORT}...`));
