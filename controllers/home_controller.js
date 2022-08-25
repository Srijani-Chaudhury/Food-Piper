
const bodyParser = require("body-parser");
const blog=require("../models/posts");
const user=require("../models/user");


module.exports.home=function(req,res){
//console.log(req.cookies);
/*blog.find(function(err,blogs){
  if(err)
    {
      console.log("Error")
    }
  res.render('home',{content:blogs});

});*/
  blog.find({}).populate('username').exec(function(err,blogs){
    if(err)
      {
        console.log(err)
      }
    //console.log(blogs);
    res.render('home',{content:blogs});
  });
};
module.exports.delete=function(req,res){
  const id=req.body.button1;
  console.log(id);
  blog.deleteOne({_id:id},function(err){
    if(err)
    {
      console.log("Error Occured");
    }
  });
  res.redirect('/');
};
module.exports.destroysession=function(req,res){
  req.logout(function(err){
    if(err)
    {
      console.log(err);
    }
  });
  return res.redirect('/');
}
