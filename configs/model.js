const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/blogDB");
const db=mongoose.connection;
db.on('error',console.error.bind(console,"Error connecting to mongoDb"));

module.exports=db;
