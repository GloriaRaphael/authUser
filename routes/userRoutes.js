var userController = require("../controller/userController");
var router = require("express").Router();

function userRouter() {
  var userCtrl = new userController();
  router.post("/signup", userCtrl.signUp);
  // router.post("/signin", userCtrl.signIn);
  // router.delete(
  //   "/:email",
  //   (req, res, next) => {
  //     req.headers.token;
  //   },
  //   userCtrl.delete
  // );
  return router;
}

function authorize(req, res, next) {
  //req.headers.token();
}

module.exports = userRouter;
