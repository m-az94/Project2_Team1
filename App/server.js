var express = require("express");
var app = express();
var passport = require("passport");
var session = require("express-session");
var bodyParser = require("body-parser");
require("dotenv").load();
var exphbs = require("express-handlebars");



//For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// For Passport
app.use(session({ secret: "keyboard cat",resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions


//For Handlebars
app.set("views", "./views");
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");
app.use(express.static("public"));


// app.get("/", function(req, res){
//   res.send("Welcome to Passport with Sequelize");
// });


//Models
var db = require("./models");


//Routes
require("./routes/auth.js")(app, passport);
require("./routes/apiRoutes")(app, passport);
require("./routes/htmlRoutes")(app, passport);


//load passport strategies
require("./config/passportdoctor.js")(passport, db.Doctors);
require("./config/passportpatient.js")(passport, db.Patients);

//Sync Database
db.sequelize.sync().then(function() {
  console.log("Nice! Database looks fine");
  }).catch(function(err){
  console.log(err, "Something went wrong with the Database Update!");;
  });
app.listen(5000, function(err){
  if(!err)
    console.log("Site is live"); else console.log(err);

});
