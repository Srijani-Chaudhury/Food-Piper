const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/blogDB");
const ItemSchema=new mongoose.Schema({
  title:String,
  para:String
});


module.exports.blog=mongoose.model("Blog",ItemSchema);
