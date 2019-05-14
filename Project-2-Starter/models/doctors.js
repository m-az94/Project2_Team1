// DOCTORS MODEL
// This is the model used when a doctor is registering on the website
//-----------------------------------------------------------------
module.exports = function(sequelize, DataTypes) {
  var Doctors = sequelize.define("Doctors", {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    speciality: {
      type:DataTypes.STRING,
      allowNull: false
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    MINC: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Doctors.associate = function(models){
    Doctors.hasMany(models.Patients,{
      onDelete:"cascade" 
    });
  };
  return Doctors;
};
