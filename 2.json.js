// Dependencies
const express = require("express");
const dotenv = require("dotenv");
const menu = require("./models/menu.js");

// Configuration
const app = express(); // app is an instance of express
dotenv.config(); // places the variables from .env file into process.env
const PORT = process.env.PORT || 3000;

/**
 * PROBLEM: Something is going wrong with posting to menu items. Try to figure out what's going on!
 */



app.use(express.json())
// Routes

app.get("/menu-items", (req, res) => {
  res.json(menu)
})
app.post("/menu-items", (req, res) => {
  menu.push(req.body);
  res.json(menu[menu.length - 1]);
});

app.listen(PORT, () => {
  console.log(`[development] Listening on port: ${PORT}`)
})
module.exports = app;