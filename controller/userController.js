var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
var userModel = require("../model/users");
var confirm = require("./index");

function userController() {
  this.signUp = (req, res) => {
    var userDetail = new userModel({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      admin: req.body.admin,
    });

    userDetail.save(err => {
      if (err) {
        res.send({
          success: false,
          message: "Error creating user",
          data: err,
        });
      } else {
        res.send({
          success: true,
          message: "User created successfully!",
          data: null,
        });
        res.end();
      }
    });
  };

  this.signIn = function(req, res) {
    userModel.findOne({ email: req.body.email }, (err, result) => {
      if (err) next(err);
      if (result) {
        let userData = result.toObject();
        bcrypt.compare(req.body.password, userData.password, (err, success) => {
          if (err) next(err);
          if (success) {
            jwt.sign(
              { email: userData.email, admin: userData.admin },
              "mykey",
              function(err, token) {
                if (err) next(err);
                res.send({
                  success: true,
                  message: "Signin successful",
                  data: {
                    token,
                  },
                });
              }
            );
          } else {
            res.send({
              success: false,
              message: "Invalid input!",
              data: null,
            });
          }
        });
      }
    });
  };

  this.delete = function(req, res) {
    userModel.deleteOne({ email: req.params.email }, err => {
      if (err) next(err);
      res.send({
        sucess: true,
        message: `Deleted successfully!`,
        data: null,
      });
    });
  };
}

module.exports = userController;
