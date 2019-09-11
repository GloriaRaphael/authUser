var userModel = require("../model/users");
var confirm = require("./index");
var router = require("express").Router;
var app = require();
//var bycrypt = require("bycrypt");

function userController(req, res) {
  this.signUp = function (req, res) {
    
    var userDetail = new userModel({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
  });

  userDetail.save(confirm);
  }
}

module.exports = userController;
