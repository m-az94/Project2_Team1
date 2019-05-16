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
<<<<<<< HEAD
  app.get("/doctor/:id/createpatient", function (req, res) {
=======
  app.get("/doctor/:idd/createpatient", function(req, res) {
>>>>>>> 8b64616470fca229b74e3c50bc6de3390fd0a201
    res.render("createPatient");
  });

  // Doctor - confirm patient
<<<<<<< HEAD
  app.get("/doctor/:id/confirmPatient", function (req, res) {
=======
  app.get("/doctor/:idd/confirmPatient", function(req, res) {
>>>>>>> 8b64616470fca229b74e3c50bc6de3390fd0a201
    res.render("confirmPatient");
  });

  // Doctor - profile
<<<<<<< HEAD
  app.get("/doctor/:id/profile", function (req, res) {
=======
  app.get("/doctor/:idd/profile", function(req, res) {
>>>>>>> 8b64616470fca229b74e3c50bc6de3390fd0a201
    res.render("doctorProfile");
  });

  // Doctor - delete patient
<<<<<<< HEAD
  app.get("/doctor/:id/patient/:id/delete", function (req, res) {
    res.render("deletePatient");
  });

  // Doctor - view patient profile (Maria)
  app.get("/doctor/:id/patient/:id/profile", function (req, res) {
    res.render("doctorVpatientProfile");
  });

  // // Doctor - view patient profile (Quang)
  // app.get("/doctorVpatientProfile", function (req, res) {
  //   res.render("doctorVpatientProfile");
  // });

  // -------------- Prescriptions page ------------------

  // Doctor - patient prescription
  app.get("/prescriptions", function (req, res) {
    res.render("prescriptions");
  });
=======
  app.get("/doctor/:idd/patient/:idp/delete", function(req, res) {
    res.render("deletePatient");
  });

  // Doctor - view patient profile
  app.get("/doctor/:idd/patient/:idp/profile", function(req, res) {
    res.render("doctorVpatientProfile");
  });

  // Doctor - 
>>>>>>> 8b64616470fca229b74e3c50bc6de3390fd0a201

  //------------------------------------------------------------------
  // PATIENT PAGES
  //------------------------------------------------------------------

  // Patient - sign in
  app.get("/patient/signin", function (req, res) {
    res.render("patientSignIn");
  });

  // Patient - options
<<<<<<< HEAD
  app.get("/patient/:id/options", function (req, res) {
=======
  app.get("/patient/:idp/options", function(req, res) {
>>>>>>> 8b64616470fca229b74e3c50bc6de3390fd0a201
    var testId = { userFirstName: "test user" };
    res.render("patientOptions", testId);
  });

  // Patient - update diary
<<<<<<< HEAD
  app.get("/patient/:id/updatediary", function (req, res) {
=======
  app.get("/patient/:idp/updatediary", function(req, res) {
>>>>>>> 8b64616470fca229b74e3c50bc6de3390fd0a201
    res.render("updateDiary");
  });

  // Patient - profile
<<<<<<< HEAD
  app.get("/patient/:id/profile", function (req, res) {
=======
  app.get("/patient/:idp/profile", function(req, res){
>>>>>>> 8b64616470fca229b74e3c50bc6de3390fd0a201
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
