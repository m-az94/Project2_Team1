// PRESCRIPTION MODEL
// this is the model used when the doctor is adding a patient's prescription to his profile
// ----------------------------------------------------------------------------------
module.exports = function(sequelize, DataTypes) {
  var Prescriptions = sequelize.define("Prescriptions", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    patient_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    drug: {
      type: DataTypes.STRING,
      allowNull: false
    },
    frequency: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  Prescriptions.associate = function(models) {
    Prescriptions.belongsTo(models.Patients, {
      foreignKey: {
        allowNull: false
      }
    });
    Prescriptions.hasMany(models.Journal, {
      onDelete: "cascade"
    });
  };
  return Prescriptions;
};
