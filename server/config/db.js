/** @format */

require("dotenv").config({ path: "./config/.env" });
const mongoose = require("mongoose");
const config = require("config");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("mongodb connected");
  } catch (error) {
    console.log("mongo db is not connected ");
  }
};

module.exports = connectDB;
