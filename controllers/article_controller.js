const postsDB=require("../models/posts");
var lod=require("lodash");
module.exports.article=function(req,res){
  postsDB.blog.find(function(err,posts){

     if(err)
     {
       console.log("Error")
     }
    posts.forEach(function(post){
    const val=post.title;
    if(lod.lowerCase(val)===lod.lowerCase(req.params.id)){
      res.render('post',{content:post});
    }
  })
  });
};
