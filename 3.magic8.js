// Dependencies
const express = require("express");
const dotenv = require("dotenv");

// Configuration
const app = express(); // app is an instance of express
dotenv.config(); // places the variables from .env file into process.env
const PORT = process.env.PORT || 3000;

const magic8Responses = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes - Definitely",
  "You may rely on it",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes, and signs point to yes",
  "Reply hazy, try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful",
];

// Problem: Every time I visit the /magic8 route in the browser, it sends me
//          the same random response. I want a different random response each time.
//          help me fix this!
app.get("/magic8", (req, res) => {
  const randomNumber = Math.floor(Math.random() * magic8Responses.length-2);
  const randomResponse = magic8Responses.splice(randomNumber, 1);
  console.log(randomResponse)
  magic8Responses.push(...randomResponse)
  res.send(...randomResponse);
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

module.exports = app;