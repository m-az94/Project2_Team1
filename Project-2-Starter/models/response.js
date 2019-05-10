// RESPONSE MODEL
// this is the model used for storing the doctor's response to the patient's journal entries
module.exports = function(sequelize, DataTypes) {
    var  Response = sequelize.define("Response", {
      journal_id: DataTypes.TEXT,
      response: DataTypes.BOOLEAN
    });
  
    Response.associate=function(models){
      Response.belongsTo(models.Journal,{
        foreignKey: {
            allowNull: false
        }
      });
    };
    return Journal;
};