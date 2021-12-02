const express=require("express");
const aboutcontroller=require("../controllers/about_controller");

const router=express.Router();
router.get('/',aboutcontroller.about);
module.exports=router;
