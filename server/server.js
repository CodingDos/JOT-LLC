import express from "express";
import db from "./db/connection.js";
import cors from "cors";
import logger from "morgan";
import chalk from "chalk";
import dotenv from "dotenv";
import allRoutes from "./routes/index.js";

/* CONFIGURATIONS */
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(logger("dev"));

app.use("/", allRoutes);

const PORT = process.env.PORT || 6000;

db.on("connected", () => {
  console.clear();
  console.log(chalk.cyanBright.bgMagenta("CONNECTED to Mongodb"));

  app.listen(PORT, () => {
    console.log(chalk.yellowBright(`Express server runnng on port: ${PORT}`));
  });
});
