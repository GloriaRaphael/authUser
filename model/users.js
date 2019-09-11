var mongoose = require("mongoose");
var schema = mongoose.Schema;

var userSchema = new schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

userModel = mongoose.model("userDetails", userSchema);
module.exports = userModel;
