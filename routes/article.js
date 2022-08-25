const express=require("express");
const router=express.Router();
const article_controller=require("../controllers/article_controller");
const passport=require("passport");
router.get('/:id',article_controller.article);
router.post('/:id/post',article_controller.create);
module.exports=router;
