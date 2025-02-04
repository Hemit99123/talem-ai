import express from "express";
const app = express();

require("dotenv").config();

app.use(express.json());

const indexRouter = require("./routes/index.route")

app.use("/", indexRouter)

app.listen("3035", () => {
  console.log("App is running on port 3035");
});
