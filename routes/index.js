const express=require("express");
const homecontroller=require("../controllers/home_controller");

const router=express.Router();
//const db=require('../config/model');


router.get('/',homecontroller.home);
router.post('/',homecontroller.delete);
router.use('/user',require("./user"));
router.use('/about',require("./about"));
router.use('/contact',require("./contact"));
router.use('/compose',require("./compose"));
router.use('/post',require("./articles"));
router.use('/delete-post',require("./delete-post"));
module.exports=router;
