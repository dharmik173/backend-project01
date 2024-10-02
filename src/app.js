const express = require("express");

const app = express();

app.get("/home", (req, res) => {
  res.send("this is home page2");
});

app.get("/login", (req, res) => {
  res.send("Hello from the login page");
});

app.get("/test", (req, res) => {
  res.send("Hello from the test page");
});

app.get("/", (req, res) => {
  res.send("Hello from");
});

app.listen(3001, () => {
  console.log("server is listening on port 3001");
});
