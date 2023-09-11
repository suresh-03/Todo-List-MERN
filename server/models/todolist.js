// importing mongoose 
const mongoose = require("mongoose");

// creating schema
const shema = new mongoose.Schema({
    task : String,
    date : String,
});

// creating model
const model = mongoose.model("list",shema);

module.exports = model;