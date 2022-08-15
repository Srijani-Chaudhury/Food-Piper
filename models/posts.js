const mongoose=require("mongoose");
const user=require("../models/user");
const postschema=new mongoose.Schema({
  title:{
    type:String,
    required:true
  },
  para:{
    type:String,
    required:true
  },
  username:{
    type:mongoose.Schema.Types.ObjectId,
    ref:user
  }
},{
  timestamps:true
});
const blog=mongoose.model("Post",postschema);
module.exports=blog;
