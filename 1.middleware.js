// Dependencies
const express = require("express");
const dotenv = require("dotenv");

// Configuration
const app = express(); // app is an instance of express
require("dotenv").config(); // places the variables from .env file into process.env
const PORT = process.env.PORT || 3000;

/*
  PROBLEM 1: Why isn't this server starting up?
  PROBLEM 2: Why aren't requests to GET / receiving a response?
  PROBLEM 3: Change the GET /burger method so that if I request GET /burger?topping=cheese ,
  the response says "here's your burger with cheese".
*/

// Middleware
app.use((req, res, next) => {
  console.log("INCOMING REQUEST: ", req.method, req.path);
  next();
});

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to the homepage.");
});

app.get("/burger", (req, res) => {
  const { topping } = req.query;
  let msg = "here's your burger";
console.log(req.query)
  if (topping) {
    res.send(msg + ` with ${topping}`);
  } else {
    res.send(msg);
  }
});

app.listen(PORT, () => {
  console.log(`[development] Listening on port: ${PORT}`);
});

module.exports = app;
