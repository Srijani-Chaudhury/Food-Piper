const user=require("../models/user");
module.exports.sign=function(req,res){
  if(req.isAuthenticated())
  {
     res.redirect("/");
  }
  res.render("Sign-Up");
};
module.exports.login=function(req,res){
  if(req.isAuthenticated())
  {
     res.redirect("/");
  }
  res.render("login");
}

module.exports.create=function(req,res){
  if(req.body.password != req.body.confirm_password)
  {
     console.log(req.body);
     res.redirect("back");
     return;
  }
  user.findOne({email:req.body.email},function(err,data){
    if(err)
    {
      console.log("Error in finding");
    }
    if(!data)
    {
       user.create({
         username:req.body.username,
         email:req.body.email,
         password:req.body.password
       },function(err,data){
         if(err)
         {
           console.log(err);
           return;
         }
         res.redirect("/user/login");
         return;

       })
    }else
    {
      console.log("Email already exsists");
      res.redirect("back");
    }

  })
}

module.exports.createsession=function(req,res){

   return res.redirect('/');
}
