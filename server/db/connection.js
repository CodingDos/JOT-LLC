import mongoose from "mongoose";
import chalk from "chalk";
import dotenv from "dotenv";

dotenv.config();

mongoose.set("returnOriginal", false);

const connectionString =
  process.env.DB_URL || "mongodb://localhost:27017/JotLLC";

mongoose.connect(connectionString).catch((err) => {
  console.log(`Error connection to MongoDB: ${err.message}`);
});

mongoose.connection.on("connected", () => console.log("Connected to database"));

mongoose.connection.on("disconnected", () => {
  console.log(chalk.bold("Disconnected from MongoDB!"));
});

mongoose.connection.on("error", (err) => {
  console.log(chalk.bold(`MongoDB connection error: ${err}`));
});

export default mongoose.connection;
