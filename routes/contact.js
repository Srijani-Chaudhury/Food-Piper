const express=require("express");
const contactcontroller=require("../controllers/contact_controller");
const router=express.Router();

router.get('/',contactcontroller.cont);

module.exports=router;
