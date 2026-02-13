import express from "express";
import dotenv from "dotenv";
import sequelize from "./config/database";
import userRoutes from "./routes/user.route";
import productRoutes from "./routes/product.route";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/users", userRoutes);
app.use("/products", productRoutes);
app.get("/", (req, res) => res.send("Hello World!"));

const port = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};

startServer();
