const blog=require("../models/posts");
var lod=require("lodash");
module.exports.article=function(req,res){
  blog.findOne({_id:req.params.id},function(err,data){
    if(err)
    {
      console.log(err);
    }
    //console.log(data);
    res.render('pagla',{content:data});
  })
};

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
