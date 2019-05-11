// PATIENTS MODEL
// This is the model used when the doctor is creating a patient profile 
//-----------------------------------------------------
module.exports = function(sequelize, DataTypes) {
    var  Patients = sequelize.define("Patients", {
      name: DataTypes.STRING,
      doctor: DataTypes.STRING,
      city: DataTypes.STRING,
      phone: DataTypes.TEXT,
      email: DataTypes.STRING,
      healthCard: DataTypes.TEXT
    });
  
    Patients.associate=function(models){
      Patients.belongsTo(models.Doctors,{
        foreignKey: {
            allowNull: false
        }
      });
      Patients.hasMany(models.Prescriptions,{
        onDelete: "" //need to figure out what to do
      });
    };
    return Patients;
};