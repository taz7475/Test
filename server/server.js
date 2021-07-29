/** @format */

require("dotenv").config({ path: "./config/.env" });
const productRoutes = require("./routes/productRoutes");
const express = require("express");
const dbConnect = require("./dbConnect");
const config = require("config") || 5000;
const app = express();
const cors = require("cors");
const connectDB=require("./config/db")
connectDB ()

const PORT = config.get("SERVER_CONFIG.PORT") || 5000;
dbConnect();

//middlewares
app.use(cors());
app.use(express.json());
app.use("/api/user", require("./routes/userRoute"));
app.use("/api/Products", productRoutes);

app.listen(PORT, () => {
  console.log(`Application is runnig on http://localhost:${PORT}`);
});
