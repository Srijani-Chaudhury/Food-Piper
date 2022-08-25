const blog=require("../models/posts");
const Comment=require("../models/comments");
var lod=require("lodash");
module.exports.article=function(req,res){
  blog.findOne({_id:req.params.id})
  .populate('username')
  .populate({
    path:'comment',
    populate:{
      path:'user'
    }
  }).exec(function(err,data){
    //console.log(data);
    if(err)
    {
      console.log(err);
     }
  res.render('pagla',{content:data});
    });
};


module.exports.create=function(req,res){
  Comment.create({
    content:req.body.content,
    user:req.user._id,
    post:req.params.id
  },function(err,com){
    blog.findById(req.params.id,function(err,art){
      if(err)
      {
        console.log(err);
      }else
      {
        art.comment.push(com);
        art.save();
      }
    })
    res.redirect("back");
  });
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
