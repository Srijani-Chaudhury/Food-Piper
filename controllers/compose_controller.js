const postsDB=require('../models/posts');
module.exports.comp=function(req,res){
  res.render('compose');
};
module.exports.poster=function(req,res){

  const blog1=new postsDB.blog({
    title:req.body.posttitle,
    para:req.body.postbody
  });
  blog1.save();
  res.redirect('/');
};
