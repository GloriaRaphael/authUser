var router = require("express").Router;
var userController = require("../controller/userController");
function userRouter() {
  var userCtrl = new userController();
  router.use("/signup", userCtrl.signUp);
  return router;
}


module.exports = userRouter;    
