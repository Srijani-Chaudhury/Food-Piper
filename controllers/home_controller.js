
const bodyParser = require("body-parser");
const postsDB=require("../models/posts");



module.exports.home=function(req,res){
//console.log(req.cookies);
postsDB.blog.find(function(err,blogs){
  if(err)
    {
      console.log("Error")
    }
  res.render('home',{content:blogs});

  });
};

module.exports.delete=function(req,res){
  const id=req.body.button1;
  console.log(id);
  postsDB.blog.deleteOne({_id:id},function(err){
    if(err)
    {
      console.log("Error Occured");
    }
  });
  res.redirect('/');
};
