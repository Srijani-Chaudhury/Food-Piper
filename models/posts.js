const mongoose=require("mongoose");
const ItemSchema=new mongoose.Schema({
  title:String,
  para:String
});

module.exports.blog=mongoose.model("Blog",ItemSchema);
