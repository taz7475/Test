/** @format */

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const orderSchema = new Schema({
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "product",
    },
  ],
  date: {
    type: Date,
    default: new Date(),
  },

  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "user",
  },
});

module.exports = mongoose.model("Order", orderSchema);
