// PRESCRIPTION MODEL 
// this is the model used when the doctor is adding a patient's prescription to his profile
// ----------------------------------------------------------------------------------
module.exports = function(sequelize, DataTypes) {
    var  Prescriptions = sequelize.define("Prescriptions", {
      patient_id: DataTypes.TEXT,
      drug: DataTypes.STRING, 
      frequency: DataTypes.TEXT
    });
  
    Prescriptions.associate=function(models){
      Prescription.belongsTo(models.Patients,{
        foreignKey: {
            allowNull: false
        }
      });
      Prescription.hasMany(models.Journal,{
        onDelete: "" // figure it out
      });
      Prescription.hasMany(models.Adherence,{
        onDelete: "" // figure it out
      });
    };
    return Prescriptions;
};