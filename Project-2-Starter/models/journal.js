// Journal Model 
// This is the model used to track whether or not the patient is taking his/her prescription as needed
// and posting feedback for the doctor
// ------------------------------------------------------
module.exports = function(sequelize, DataTypes) {
    var  Journal = sequelize.define("Journal", {
      prescription_id: DataTypes.TEXT,
      has_Taken: DataTypes.BOOLEAN,
      feedback: DataTypes.STRING
    });
  
    Journal.associate=function(models){
      Journal.belongsTo(models.Prescriptions,{
        foreignKey: {
            allowNull: false
        }
      });
      Journal.hasMany(models.Response,{
        onDelete: "Cascade" //delete everything
      });
    };
    return Journal;
};