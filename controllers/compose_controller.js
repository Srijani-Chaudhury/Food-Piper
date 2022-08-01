const postsDB=require('../models/posts');
module.exports.comp=function(req,res){
  res.render('compose');
};
module.exports.poster=function(req,res){

  /*const blog1=new postsDB.blog({
    title:req.body.posttitle,
    para:req.body.postbody
  });*/

  postsDB.blog.create({
    title:req.body.postitle,
    para:req.body.postbody
  },function(err,newpost){
    if(err)
    {
       console.log("Error");
    }else
    {
      console.log(newpost);
    }
  });
  //blog1.save();
  res.redirect('/');
};
