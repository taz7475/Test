/** @format */

const mongoose = require("mongoose");
const config = require("config");
//khater .env mch f nafs ligne m3a server
require("dotenv").config({ path: "./config/.env" });

const dbConnect = () => {
  console.log();
  mongoose.connect(
    process.env.URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    },
    err => {
      if (err) throw err;
      console.log("DB Connected...");
    }
  );
};
module.exports = dbConnect;
