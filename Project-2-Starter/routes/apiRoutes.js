var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/doctors", function(req, res) {
    db.Doctors.findAll({}).then(function(healthcare_db) {
      res.json(healthcare_db);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Doctors.create(req.body).then(function(healthcare_db) {
      res.json(healthcare_db);
    });
  });

  // Delete an example by id
  app.delete("/api/doctors/:id", function(req, res) {
    db.Doctors.destroy({ where: { id: req.params.id } }).then(function(healthcare_db) {
      res.json(healthcare_db);
    });
  });
};
