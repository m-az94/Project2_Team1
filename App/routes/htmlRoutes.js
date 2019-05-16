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

  app.get("/doctorSignIn", function (req, res) {
    res.render("doctorSignIn");
  });

  // Doctor - sign up
  app.get("/doctorSignUp", function (req, res) {
    res.render("doctorSignUp");
  });

  // Doctor - create patient

  app.get("/doctor/:idd/createpatient", function(req, res) {
    res.render("createPatient");
  });

  // Doctor - confirm patient

  app.get("/doctor/:idd/confirmPatient", function(req, res) {
    res.render("confirmPatient");
  });

  // Doctor - profile
  app.get("/doctor/:idd/profile", function(req, res) {
    res.render("doctorProfile");
  });

  // Doctor - delete patient

  app.get("/doctor/:idd/patient/:idp/delete", function(req, res) {
    res.render("deletePatient");
  });

  // Doctor - view patient profile
  app.get("/doctor/:idd/patient/:idp/profile", function(req, res) {
    res.render("doctorVpatientProfile");
  });

  // Doctor - 


  //------------------------------------------------------------------
  // PATIENT PAGES
  //------------------------------------------------------------------

  // Patient - sign in

  app.get("/patient/signin", function (req, res) {

    res.render("patientSignIn");
  });

  // Patient - options

  app.get("/patient/:idp/options", function(req, res) {

    var testId = { userFirstName: "test user" };
    res.render("patientOptions", testId);
  });

  // Patient - update diary

  app.get("/patient/:idp/updatediary", function(req, res) {

    res.render("updateDiary");
  });

  // Patient - profile

  app.get("/patient/:idp/profile", function(req, res){

    res.render("patientProfile");
  });

  //------------------------------------------------------------------
  // OTHER PAGES
  //------------------------------------------------------------------

  // Contact Us
  app.get("/contact", function (req, res) {
    res.render("contact");
  });
  // About Us
  app.get("/about", function (req, res) {
    res.render("about");
  });
  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
