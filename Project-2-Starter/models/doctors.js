// DOCTORS MODEL
// This is the model used when a doctor is registering on the website
//-----------------------------------------------------------------
module.exports = function(sequelize, DataTypes) {
  var  Doctors = sequelize.define("Doctors", {
    name: DataTypes.STRING,
    speciality: DataTypes.STRING,
    location: DataTypes.STRING,
    MIN: DataTypes.TEXT
  });

  Doctors.associate=function(models){
    Doctors.hasMany(models.Patients,{
      onDelete:"" //need to establish what to do with deleted doctor's patients
    })
  };
  return Doctors;
};
