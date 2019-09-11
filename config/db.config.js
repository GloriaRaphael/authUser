var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/userDb", {
  useCreateIndex: true,
  useNewUrlParser: true,
});
let db = mongoose.connection;

db.once("open", () => {
  console.log("Connected to database!");
});

db.on("error", () => {
  console.log(`Error connecting to database ${error}`);
});
