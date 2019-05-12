var db = require("../models");
var path = require("path");

module.exports = function (app) {
  
  // Load index page
  app.get("/", function (req, res) {
    res.render("index");
  });

  //------------------------------------------------------------------
  // DOCTORS PAGES
  //------------------------------------------------------------------

  // Doctor - first view
  app.get("/doctor", function (req, res) {
    res.render("doctor");
  });

  // Doctor - sign in
  app.get("/doctor/signin", function (req, res) {
    res.render("doctorSignIn");
  });
  // Doctor - sign up
  app.get("/doctor/signup", function (req, res) {
    res.render("doctorSignUp");
  });

  // Doctor - create patient
  app.get("/doctor/:id/createpatient", function (req, res) {
    res.render("createPatient");
  });

  // Doctor - confirm patient
   app.get("/doctor/:id/confirmPatient", function(req, res){
    res.render("confirmPatient");
  });
  
  // Doctor - profile
  app.get("/doctor/:id/profile", function(req, res){
    res.render("doctorProfile");

  //------------------------------------------------------------------
  // PATIENT PAGES
  //------------------------------------------------------------------
  app.get("/patient/signin", function (req, res) {
    res.render("patientSignIn");
  });


  app.get("/patient/:id/options", function (req, res) {
    var testId = { userFirstName: "test user" };
    res.render("patientOptions", testId);
  });

  //------------------------------------------------------------------
  // OTHER PAGES
  //------------------------------------------------------------------

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });

};
