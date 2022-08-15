const express=require("express");
const logincontroller=require("../controllers/user");
const passport=require("passport");
const router=express.Router();
router.get("/login",logincontroller.login);
router.get("/Sign-Up",logincontroller.sign);
router.post("/create",logincontroller.create);
router.post("/create-session",passport.authenticate(
  'local',
  {failureRedirect:'/user/login'},
),logincontroller.createsession);

module.exports=router;
