var db = require("../models");

module.exports = function(app) {

  //----------------------------------------------------------
  // DOCTOR API ROUTES 
  //---------------------------------------------------------

  // Get all doctors data including patients
  app.get("/api/doctors", function(req, res){
    db.Doctors.findAll({
      include: [db.Patients]
    }).then(function(healthcare_db){
      res.json(healthcare_db);
    })
  });

  // Get id specific doctors data including including his patients
  app.get("/api/doctors/:id", function(req, res) {
    db.Doctors.findOne({
      where:{
        id: req.params.id
      },
      include: [db.Patients]
    }).then(function(healthcare_db) {
      res.json(healthcare_db);
    });
  });

  // Create a new doctor
  app.post("/api/doctors", function(req, res) {
    db.Doctors.create(req.body).then(function(healthcare_db) {
      res.json(healthcare_db);
    });
  });

  //----------------------------------------------------------
  // PATIENT API ROUTES
  //----------------------------------------------------------
  
  // Get all patients -- not sure of the use in this app
  app.get("/api/patients", function(req, res){
    db.Patients.findAll({
      includes: [db.Prescriptions]
    }).then(function(healthcare_db){
      res.json(healthcare_db);
    });
  });

  // Get specific patient based on ID including doctor, prescription
  // journal and response
  app.get("/api/patients/:id", function(req, res){
    db.Patients.findOne({
      where:{
        id: req.params.id
      },
      include:[db.Doctors,db.Prescriptions, db.Journal, db.Response]
    }).then(function(healthcare_db){
      res.json(healthcare_db);
    });
  });

  // Create a new patient
  app.post("/api/patients", function(req, res){
    db.Patients.create(req.body).then(function(healthcare_db){
      res.json(healthcare_db);
    });
  });

  // Delete patient
  app.delete("/api/patients/:id", function(req, res){
    db.Patients.destroy({
      where: {id: req.params.id}
    }).then(function(healthcare_db){
      res.json(healthcare_db);
    });
  });

  //----------------------------------------------------------
  // PRESCRIPTIONS API ROUTES
  //----------------------------------------------------------

  // Get all prescriptions (not sure about the implementation for this app)
  app.get("api/prescriptions", function(req,res){
    db.Prescriptions.findAll({
      includes:[db.Journal, db.Response]
    }).then(function(healthcare_db){
      res.json(healthcare_db);
    });
  });

  // Get specific prescription
  app.get("api/prescriptions/:id", function(req,res){
    db.Prescriptions.findOne({
      where: {id: req.params.id},
      includes: [db.Journal, db.Response]
    }).then(function(healthcare_db){
      res.json(healthcare_db);
    });
  });

  // Create a new prescription
  app.post("api/prescriptions", function(req,res){
    db.Prescriptions.create(req.body).then(function(healthcare_db){
      res.json(healthcare_db);
    });
  });

  // Delete prescription
  app.post("api/prescriptions/:id",function(req,res){
    db.Prescriptions.destroy({
      where: {id: req.params.id}
    }).then(function(healthcare_db){
      res.json(healthcare_db);
    });
  });

  //----------------------------------------------------------
  // JOURNAL API ROUTES
  //----------------------------------------------------------

  // Get all journal entries 
  app.get("/api/journal", function(req, res){
    db.Journal.findAll({
      include: [db.Response]
    }).then(function(healthcare_db){
      res.json(healthcare_db);
    });
  });

  app.get("/api/journal/:id", function(req, res){
    db.Journal.findOne({
      where: {id: req.params.id},
      include: [db.Response]
    }).then(function(healthcare_db){
      res.json(healthcare_db);
    });
  });

  app.post("api/journal", function(req, res){
    db.Journal.create(req.body).then(function(healthcare_db){
      res.json(healthcare_db);
    });
  });

  app.delete("api/journal/:id", function(req, res){
    db.Journal.destroy({
      where:{id: req.params.id}
    }).then(function(healthcare_db){
      res.json(healthcare_db);
    });
  });

  //----------------------------------------------------------
  // RESPONSE API ROUTES
  //----------------------------------------------------------

  app.get("/api/response", function(req, res){
    db.Response.findAll().then(function(healthcare_db){
      res.json(healthcare_db);
    });
  });

  app.get("/api/response/:id", function(req, res){
    db.Response.findOne({
      where: {id: req.params.id}
    }).then(function(healthcare_db){
      res.json(healthcare_db);
    });
  });

  app.post("/api/response", function(req, res){
    db.Response.create().then(function(healthcare_db){
      res.json(healthcare_db);
    });
  });

  app.delete("api/response/:id", function(req, res){
    db.Response.destroy({
      where: {id: req.params.id}
    }).then(function(healthcare_db){
      res.json(healthcare_db);
    });
  });
  
}
