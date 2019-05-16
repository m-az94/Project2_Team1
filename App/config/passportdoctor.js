 //load bcrypt
 var bCrypt = require('bcrypt-nodejs');

 module.exports = function(passport,doctor){

 var Doctors = doctor;
 var LocalStrategy = require('passport-local').Strategy;


 passport.serializeUser(function(doctor, done) {
         done(null, doctor.id);
     });


 // used to deserialize the doctor
 passport.deserializeUser(function(id, done) {
    Doctors.findById(id).then(function(doctor) {
       if(doctor){
         done(null, doctor.get());
       }
       else{
         done(Doctors.errors,null);
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

      Doctors.findOne({where: {email:email}}).then(function(doctor){

     if(doctor)
     {
       return done(null, false, {message : 'That email is already taken'} );
     }

     else
     {
       var DoctorsPassword = generateHash(password);
       var data =
       { email:email,
       password:DoctorsPassword,
       firstname: req.body.firstname,
       lastname: req.body.lastname
       };


       Doctors.create(data).then(function(newDoctor,created){
         if(!newDoctor){
           return done(null,false);
         }

         if(newDoctor){
           return done(null,newDoctor);
           
         }


       });
     }


   }); 



 }



 ));
   
 //LOCAL SIGNIN
 passport.use('local-signin', new LocalStrategy(
   
 {

 // by default, local strategy uses Doctorsname and password, we will override with email
 email : 'email',
 password : 'password',
 passReqToCallback : true // allows us to pass back the entire request to the callback
 },

 function(req, email, password, done) {

   var Doctors = doctor;

   var isValidPassword = function(Doctorspass,password){
     return bCrypt.compareSync(password, Doctorspass);
   }

   Doctors.findOne({ where : { email: email}}).then(function (doctor) {

     if (!doctor) {
       return done(null, false, { message: 'Email does not exist' });
     }

     if (!isValidPassword(doctor.password,password)) {

       return done(null, false, { message: 'Incorrect password.' });

     }

     var doctorinfo = doctor.get();

     return done(null,doctorinfo);

   }).catch(function(err){

     console.log("Error:",err);

     return done(null, false, { message: 'Something went wrong with your Signin' });


   });

 }
 ));

 }
