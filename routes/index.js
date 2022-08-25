const express=require("express");
const homecontroller=require("../controllers/home_controller");
const passport=require("passport");
const router=express.Router();
//const db=require('../config/model');

router.use('/',require("./home"));
router.use('/user',require("./user"));
router.use('/article',require("./article"));

module.exports=router;
