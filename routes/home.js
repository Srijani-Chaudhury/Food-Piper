const express=require("express");
const homecontroller=require("../controllers/home_controller");
const articlecontroller=require("../controllers/article_controller");
const composecontroller=require("../controllers/compose_controller");
const aboutcontroller=require("../controllers/about_controller");
const contactcontroller=require("../controllers/contact_controller")


const passport=require("passport");
const router=express.Router();


router.get('/',passport.checkAuthentication,homecontroller.home);
router.post('/',homecontroller.delete);

router.get('/about',aboutcontroller.about);
router.get('/contact',contactcontroller.cont);

router.get('/compose',passport.checkAuthentication,composecontroller.comp);
router.post('/compose',composecontroller.poster);


router.get('/delete-post/:id',articlecontroller.delete);
router.get("/logout",homecontroller.destroysession);

module.exports=router;
