//jshint esversion:6
const bodyParser = require("body-parser");
const express = require("express");
const ejs = require("ejs");
const path=require("path");
const db=require("./configs/model");
const app = express();
const cookies=require("cookie-parser");

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));

//middlewares
app.use(express.static("public"));

app.use(express.urlencoded());
app.use(cookies());

//routes should be set after the middlewares
app.use('/',require("./routes"));


app.listen(3000, function() {
  console.log("Server started on port 3000");
});
