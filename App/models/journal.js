// Journal Model 
// This is the model used to track whether or not the patient is taking his/her prescription as needed
// and posting feedback for the doctor
// ------------------------------------------------------
module.exports = function(sequelize, DataTypes) {
    var  Journal = sequelize.define("Journal", {
      id:{
        autoIncrement: true,
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      prescription_id: {
        type:DataTypes.INTEGER,
        allowNull: false
      },
      has_Taken: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      feedback: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
  
    Journal.associate=function(models){
      Journal.belongsTo(models.Prescriptions,{
        foreignKey: {
            allowNull: false
        }
      });
      Journal.hasMany(models.Response,{
        onDelete: "cascade" //delete everything
      });
    };
    return Journal;
};