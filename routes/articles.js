const express=require("express");
const router=express.Router();
const articlecontroller=require("../controllers/article_controller");
router.get('/:id',articlecontroller.article);

module.exports=router;
