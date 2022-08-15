//jshint esversion:6
const bodyParser = require("body-parser");
const mongoose=require("mongoose");
const express = require("express");
const ejs = require("ejs");
const path=require("path");
const db=require("./configs/model");
const app = express();
const cookies=require("cookie-parser");
const sassMiddleware=require("node-sass-middleware");

//used for session cooki
const session=require("express-session");
const passport=require("passport");
const passportLocal=require("./configs/passport-local-strategy")

//storing cookies in MongoDB
const mongostore=require("connect-mongo");

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));

//middlewares
app.use(sassMiddleware({
  src:'./public/scss',
  dest:'./public/css',
  // false in production mode
  debug:false,
  outputStyle:'extended',
  prefix:'/css'
}));
app.use(express.static("public"));

app.use(express.urlencoded());
app.use(cookies());

//routes should be set after the middlewares

//encryption  of the sessional cookie
app.use(session({
  name:'Food-piper',
  secret:'blah-something',
  // means when a user logins into our page and the identity is not estavlishhed there
  //we will not store anyting in the cookie
  saveUninitialized:false,
  //we will not reload the encrypted code in the cookie once it has been saved
  resave:false,
  cookie:{
    //age for which the cookie will remain valid
    maxAge:(100*60*100)
},
  store: mongostore.create({
    mongoUrl:"mongodb://localhost:27017/blogDB"
  })
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticateduser);
app.use('/',require("./routes"));

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
