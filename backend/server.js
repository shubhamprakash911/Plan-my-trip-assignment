require("dotenv").config(); //loads environment variables from a .env file into process.env
const express = require("express");
const connectDB = require("./config/db");

const app = express();

connectDB(); //db connection

app.get("/", (req, res) => {
  res.send({ message: "server is running fine" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("server is running on port ", 5000);
});
