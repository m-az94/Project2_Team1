
  //load bcrypt
  var bCrypt = require('bcrypt-nodejs');

  module.exports = function(passport,patient){

  var Patients = patient;
  var LocalStrategy = require('passport-local').Strategy;


  passport.serializeUser(function(patient, done) {
          done(null, patient.id);
      });


  // used to deserialize the patient
  passport.deserializeUser(function(id, done) {
      Patients.findById(id).then(function(patient) {
        if(patient){
          done(null, patient.get());
        }
        else{
          done(patient.errors,null);
        }
      });

  });


  passport.use('local-signup', new LocalStrategy(

    {           
      email : 'email',
      password : 'password',
      passReqToCallback : true // allows us to pass back the entire request to the callback
    },

    function(req, email, password, done){
       

      var generateHash = function(password) {
      return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
      };

       Patients.findOne({where: {email:email}}).then(function(patient){

      if(patient)
      {
        return done(null, false, {message : 'That email is already taken'} );
      }

      else
      {
        var PatientsPassword = generateHash(password);
        var data =
        { email:email,
        password:PatientsPassword,
        name: req.body.name
        };


        Patients.create(data).then(function(newPatients,created){
          if(!newPatients){
            return done(null,false);
          }

          if(newPatients){
            return done(null,newPatients);
            
          }


        });
      }


    }); 



  }



  ));
    
  //LOCAL SIGNIN
  passport.use('local-signin', new LocalStrategy(
    
  {

  // by default, local strategy uses Patientsname and password, we will override with email
  email : 'email',
  password : 'password',
  passReqToCallback : true // allows us to pass back the entire request to the callback
  },

  function(req, email, password, done) {

    var Patients = patient;

    var isValidPassword = function(Patientspass,password){
      return bCrypt.compareSync(password, Patientspass);
    }

    Patients.findOne({ where : { email: email}}).then(function (patient) {

      if (!patient) {
        return done(null, false, { message: 'Email does not exist' });
      }

      if (!isValidPassword(patient.password,password)) {

        return done(null, false, { message: 'Incorrect password.' });

      }

      var Patientsinfo = patient.get();

      return done(null,Patientsinfo);

    }).catch(function(err){

      console.log("Error:",err);

      return done(null, false, { message: 'Something went wrong with your Signin' });


    });

  }
  ));

  }