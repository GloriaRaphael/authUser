var jwt = require("jsonwebtoken");
var userController = require("../controller/userController");
var router = require("express").Router();

function userRouter() {
  var userCtrl = new userController();
  router.post("/signup", userCtrl.signUp);
  router.post("/signin", userCtrl.signIn);
  router.delete("/:email", authorize, userCtrl.delete);
  return router;
}

function authorize(req, res, next) {
  jwt.verify(req.headers.token, "mykey", (err, data) => {
    if (err) next(err);
    if (data.admin) {
      next();
    } else {
      res.send({
        success: false,
        message: "Bitch you ain't Admin",
        data: null,
      });
    }
  });
}

module.exports = userRouter;
