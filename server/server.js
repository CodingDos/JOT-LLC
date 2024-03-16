import express from "express"
import db from "/db/connection.js"
import cors from "cors"
import logger from "morgan"
import chalk from "chalk"
import allRoutes from "./routes/index.js"

const app = express()

app.use(express.json())
app.use(cors())
app.use(logger("dev"))

app.use("/", allRoutes)

const PORT = process.env.PORT || 3000

db.on("connected", () => {
    console.clear()
    console.log(chalk.cyanBright.bgMagenta("CONNECTED to Mongodb"))

    app.listen(PORT, () => {
        console.log(chalk.yellowBright(`Express server runnng on port: ${PORT}`))
    })
})