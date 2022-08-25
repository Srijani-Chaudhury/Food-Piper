const mongoose=require("mongoose");
const commentschema=new mongoose.Schema({
  content:{
    type:String,
    require:true
  },
  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User'
  },
  post:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Post'
  }
},{
  timestamps:true
});
const Comment=mongoose.model("Comment",commentschema);
module.exports=Comment;
