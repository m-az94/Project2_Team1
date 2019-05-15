// RESPONSE MODEL
// this is the model used for storing the doctor's response to the patient's journal entries
module.exports = function(sequelize, DataTypes) {
    var  Response = sequelize.define("Response", {
      journal_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      response: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      }
    });
  
    Response.associate=function(models){
      Response.belongsTo(models.Journal,{
        foreignKey: {
            allowNull: false
        }
      });
    };
    return Response;
};