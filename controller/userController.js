var userModel = require("../model/users");
var confirm = require("./index");

function userController() {
  this.signUp = (req, res) => {
    var userDetail = new userModel({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
    });

    userDetail.save(confirm);

    res.status(201).send({
      message: "user created",
    });
  };

  this.signIn = function(req, res) {};
}

module.exports = userController;
