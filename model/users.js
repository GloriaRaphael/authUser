var mongoose = require("mongoose");
var schema = mongoose.Schema;
var bcrypt = require("bcryptjs");

var userSchema = new schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  admin: {type: Boolean, default: false }
});

userSchema.pre("save", function(next) {
  var saltRounds = 12;
  bcrypt
    .hash(this.password, saltRounds)
    .then(hash => {
      this.password = hash;
      next();
    })
    .catch(err => {
      next(err);
    });
});

var userModel = mongoose.model("userDetails", userSchema);
module.exports = userModel;
