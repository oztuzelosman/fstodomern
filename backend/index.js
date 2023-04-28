const express = require("express");
const app = express();

const connectDB = require("./db/connect");
require("dotenv").config();

const todo_router = require("./routes/todo_router");

app.use(express.json());
app.use("/api/v1/todos", todo_router);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(5000, () => {
      console.log("listening for mongo");
    });
  } catch (error) {
    console.log(error);
  }
};

start();
