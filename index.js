var express = require("express");
var mongoose = require("mongoose");

//PATHS
require("./config/db.config");
var routes = require("./routes");

var port = process.env.PORT || 3000;

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", routes(express.Router()));

app.use((err, req, res, next) => {
  res.status(500).send({
    message: "sorry an error occured",
    data: err,
  });
});

app
  .listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  })
  .on("error", err => {
    console.log("an error occured");
  });
