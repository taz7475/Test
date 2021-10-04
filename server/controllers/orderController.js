/** @format */

const Order = require("../models/Order");

const NewOrder = async (req, res) => {
  try {
    const { products, owner } = req.body;

    const order = new Order({
      products,
      owner,
    });

    const neworder = await order.save();
    res.json({ neworder });
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
};

const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find({});
    res.json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "server Error" });
  }
};
const getUserOrder = async (req, res) => {
  try {
    console.log(req.userId);
    const orders = await Order.find({ owner: req.userId })
      .populate("products")
      .populate("owner", "-password");
    res.json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "server Error" });
  }
};
module.exports = { NewOrder, getAllOrders, getUserOrder };
