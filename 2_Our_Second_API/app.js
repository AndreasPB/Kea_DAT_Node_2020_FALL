// One-liner express
// const app = require("express")();

const express = require("express");
const app = express();

const hostname = '127.0.0.1';
const port = 8000;

const apiObject = require("./information.json");

app.get("/", (req, res) => {
  return res.send(apiObject);
  //return res.send({"davs":"daaaavs"});
});


app.listen(port, hostname, (error) => {
  if (error) {
    console.log("Error starting the server");
  }
  console.log(`Server running at http://${hostname}:${port}/`);
});