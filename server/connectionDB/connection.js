// importing mongoose to connect to db
const mongoose = require("mongoose");

// import dotenv
require("dotenv").config();


async function connectToDB(){
    await mongoose.connect(process.env.DB_URL);
    console.log("connected to Database");
}

module.exports = connectToDB;