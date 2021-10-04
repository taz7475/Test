require("dotenv").config({ path: "./config/.env" });

const productData = require("./data/Products");

const dbConnect = require("./dbConnect");
const Product = require("./models/Product");

dbConnect()
const importData = async () => {
  try {
    await Product.deleteMany({});

    await Product.insertMany(productData);

    console.log("Data Import Success");

    process.exit();
  } catch (error) {
    console.error("Error with data import", error);
    process.exit(1);
  }
};

importData();

