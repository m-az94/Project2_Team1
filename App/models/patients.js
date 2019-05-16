// PATIENTS MODEL
// This is the model used when the doctor is creating a patient profile 
//-----------------------------------------------------
module.exports = function(sequelize, DataTypes) {
    var  Patients = sequelize.define("Patients", {
      id:{
        autoIncrement: true,
        primaryKey:true,
        type: DataTypes.INTEGER
      },
      fullname: {
        type: DataTypes.STRING,
        allowNull: false
      },
      doctor_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      phone: {
        type: DataTypes.STRING,
        allowNull:false
      },
      email:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
          isEmail: true
        }
      },
      healthCard: {
        type: DataTypes.STRING,
        allowNull: false
      },
      password:{
        type: DataTypes.STRING,
        allowNull: false
      }
    });
  
    Patients.associate=function(models){
      Patients.belongsTo(models.Doctors,{
        foreignKey: {
            allowNull: false
        }
      });
      Patients.hasMany(models.Prescriptions,{
        onDelete: "cascade" //need to figure out what to do
      });
    };
    return Patients;
};