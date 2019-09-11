var express = require("express");
var mongoose = require("mongoose");

//PATHS
var dbconfig = require("./config/db.config");
var signUp = require("./route/userRoutes");

var port = process.env.PORT || 3000;

var app = express();

app.use("/api", (req, res) => {
  res.send(
    "<h1>Welcome to Trigger. Building habits, one trigger at a time!</h1><html><head><titile></titile></head></head></html>"
  );
});

app.post("/api/signup", signUp);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
