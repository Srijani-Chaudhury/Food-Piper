const express=require("express");
const router=express.Router();

const composecontroller=require("../controllers/compose_controller");

router.get('/',composecontroller.comp);
router.post('/',composecontroller.poster);
module.exports=router;
