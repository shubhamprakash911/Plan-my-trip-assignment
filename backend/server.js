require("dotenv").config(); //loads environment variables from a .env file into process.env
const express = require("express");
const connectDB = require("./config/db");
const { notFound, errorHandler } = require("./middlewares/errorHandler");
const postRoute = require("./routes/postRoute");

const app = express();

app.use(express.json()); // to parse json
app.use(express.urlencoded({ extended: true })); // to parse urlencoded data

connectDB(); //db connection

app.get("/", (req, res) => {
  res.send({ message: "server is running fine" });
});

//all routes
app.use("/api/post", postRoute);

// error handler
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log("server is running on port ", PORT);
});
