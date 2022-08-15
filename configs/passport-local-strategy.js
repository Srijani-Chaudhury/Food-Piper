const passport=require("passport");
const user=require("../models/user");
const localStrategy=require("passport-local").Strategy;

passport.use(new localStrategy({
  usernameField:'email'
},function(email,password,done){
  user.findOne({email:email},function(err,data){
    if(err)
    {
      console.log("Error finding the email");
      return done(err);
    }else
    if(!data || data.password!=password)
    {
      console.log("Invalid Usernam/Password");
      return done(null,false);
    }else
    {
      return done(null,data);
    }
  })
}));

//serializing the user function to decide which key field is to be kept as a cookie
passport.serializeUser(function(data,done){
  done(null,data.id);
});
//checking wrther the cookie is there or not
passport.deserializeUser(function(id,done){
  user.findById(id,function(err,data){
    if(err){
      console.log("Error in finding user");
      return done(err);
    }else
    {
      return done(null,data);
    }
  })
});
//deseralizing the user function to establish the users identity using the cookie

passport.checkAuthentication=function(req,res,next){
  if(req.isAuthenticated()){
    return next();
  }else{
    return res.redirect("/user/login");
  }
}

passport.setAuthenticateduser=function(req,res,next){
  if(req.isAuthenticated()){
    res.locals.user=req.user;
  }
  next();
}
module.exports=passport;
