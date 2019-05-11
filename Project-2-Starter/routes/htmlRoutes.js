var db = require("../models");
var path = require("path");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("patientProfile");
  });

  //------------------------------------------------------------------
  // DOCTORS PAGES
  //------------------------------------------------------------------

  // Doctor - first view
  app.get("/doctor", function(req, res) {
    res.render("doctor");
  });

  // Doctor - sign in
  app.get("/doctor/SignIn", function(req, res) {
    res.render("doctorSignIn");
  });
  // Doctor - sign up
  app.get("/doctor/SignUp", function(req, res){
    res.render("doctorSignUp");
  });

  // Doctor - create patient
  app.get("/doctor/:id/createPatient", function(req, res){
    res.render("createPatient");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });

  //------------------------------------------------------------------
  // PATIENT PAGES
  //------------------------------------------------------------------
  app.get("/patient/SignUp", function(req, res) {
    res.render("patientSignIn");
  });
};
