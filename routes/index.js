const express=require("express");
const bodyParser = require("body-parser");
const homecontroller=require("../controllers/home_controller");

const router=express.Router();
router.use(bodyParser.urlencoded({extended: true}));

router.get('/',homecontroller.home);
router.post('/',homecontroller.delete);
router.use('/about',require("./about"));
router.use('/contact',require("./contact"));
router.use('/compose',require("./compose"));
router.use('/post',require("./articles"));
module.exports=router;
