const blog=require('../models/posts');
module.exports.comp=function(req,res){
  res.render('compose');
};
module.exports.poster=function(req,res){
// console.log(req.user._id);
 blog.create({
    title:req.body.posttitle,
    para:req.body.postbody,
    username:req.user._id
  },function(err,newpost){
    if(err)
    {
       console.log(err);
    }else
    {
      console.log(newpost);
    }
  });
  //blog1.save();
  res.redirect('/');
};
