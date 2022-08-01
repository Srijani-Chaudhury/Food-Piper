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

/*module.exports.delete=function(req,res){
  const id=req.body.button1;
  console.log(id);
  postsDB.blog.deleteOne({_id:id},function(err){
    if(err)
    {
      console.log("Error Occured");
    }
  });
  res.redirect('/');
};*/

module.exports.delete=function(req,res){
  const id=req.params.id;
  //console.log(id);
  postsDB.blog.deleteOne({_id:id},function(err){
    if(err)
    {
      console.log("Error Occured");
    }
  });
  res.redirect('/');
}
