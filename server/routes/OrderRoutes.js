/** @format */

const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");
const { tokenMiddelware } = require("../middlewares/tokenMiddleware");

router.post("/addorder", orderController.NewOrder);
router.get("/userorders", tokenMiddelware, orderController.getUserOrder);
router.get("/orders", orderController.getAllOrders);

module.exports = router;
