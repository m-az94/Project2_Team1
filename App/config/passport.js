var LocalStrategy = require('passport-local').Strategy;

// load up the doctor model
var db = require('../models');

// expose this function to our app using module.exports
module.exports = function (passport) {

    // =========================================================================
    // passport session setup for Doctors
    // =========================================================================
    // required for persistent login sessions
    // passport needs ability to serialize and unserialize doctors out of session

    // used to serialize the doctor for the session
    passport.serializedoctor(function (doctor, done) {
        done(null, doctor.uuid);
    });

    // used to deserialize the doctor
    passport.deserializedoctor(function (uuid, done) {
        db.Doctors.findById(uuid).then(function (doctor) {

            if (doctor) {
                done(null, doctor.get());
            } else {
                done(doctor.errors, null);
            }
        });
    });

    // =========================================================================
    // passport session setup for Patients
    // =========================================================================
    // required for persistent login sessions
    // passport needs ability to serialize and unserialize patients out of session

    // used to serialize the patient for the session
    passport.serializepatient(function (patient, done) {
        done(null, patient.uuid);
    });

    // used to deserialize the patient
    passport.deserializepatient(function (uuid, done) {
        db.Doctors.findById(uuid).then(function (patient) {

            if (patient) {
                done(null, patient.get());
            } else {
                done(patient.errors, null);
            }
        });
    });

    // =========================================================================
    // LOCAL SIGNUP FOR DOCTORS
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'

    passport.use('local-signup', new LocalStrategy({
            // by default, local strategy uses doctorname and password, we will override with email
            email: 'email',
            password: 'password',
            passReqToCallback: true // allows us to pass back the entire request to the callback
        },
        function (req, email, password, done) {
            // asynchronous
            // doctor.findOne wont fire unless data is sent back
            process.nextTick(function () {
                // find a doctor whose email is the same as the forms email
                // we are checking to see if the doctor trying to login already exists

                db.Doctors.findOne({
                    where: {
                        email: email
                    }
                }).then(function (doctor, err) {
                    if (err) {
                        return done(err);
                    }

                    // check to see if theres already a doctor with that email
                    if (doctor) {
                        return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
                    } else {
                        // if there is no doctor with that email
                        // create the doctor
                        db.Doctors.create({
                            name: req.body.first_name,
                            phone: req.body.phone,
                            city: req.body.city,
                            MINC: req.body.city,
                            email: req.body.email,
                            password: req

                        }).then(function (Doctors) {
                            // send post back to render
                            return done(null, Doctors);

                        }).catch(function (err) {
                            // handle error;
                            console.log(err);
                        });
                    }
                });
            });

        }));

    // =========================================================================
    // LOCAL SIGNUP FOR PATIENTS
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'

    passport.use('local-signup', new LocalStrategy({
            // by default, local strategy uses doctorname and password, we will override with email
            email: 'email',
            password: 'password',
            passReqToCallback: true // allows us to pass back the entire request to the callback
        },
        function (req, email, password, done) {
            // asynchronous
            // doctor.findOne wont fire unless data is sent back
            process.nextTick(function () {
                // find a patient whose email is the same as the forms email
                // we are checking to see if the patient trying to login already exists

                db.Patients.findOne({
                    where: {
                        email: email
                    }
                }).then(function (patient, err) {
                    if (err) {
                        return done(err);
                    }

                    // check to see if theres already a patient with that email
                    if (patient) {
                        return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
                    } else {
                        // if there is no patient with that email
                        // create the patient
                        db.Patients.create({
                            name: req.body.name,
                            doctor_id: req.body.doctor_id,
                            phone: req.body.phone,
                            healthCard: req.body.healthCard,
                            email: req.body.email,
                            password: db.Patients.generateHash(password)

                        }).then(function (Patients) {
                            // send post back to render
                            return done(null, Patients);

                        }).catch(function (err) {
                            // handle error;
                            console.log(err);
                        });
                    }
                });
            });

        }));

    // =========================================================================
    // LOCAL LOGIN FOR DOCTORS
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'

    passport.use('local-login', new LocalStrategy({
            // by default, local strategy uses doctorname and password, we will override with email
            email: 'email',
            password: 'password',
            passReqToCallback: true // allows us to pass back the entire request to the callback
        },
        function (req, email, password, done) { // callback with email and password from our form

            // find a doctor whose email is the same as the forms email
            // we are checking to see if the doctor trying to login already exists
            db.Doctors.findOne({
                where: {
                    email: req.body.email
                }
            }).then(function (doctor, err) {
                // if there are any errors, return the error before anything else         

                if (err) {
                    return done(err);
                }

                if (!doctor) {
                    return done(null, false, req.flash('loginMessage', 'No doctor found.')); // req.flash is the way to set flashdata using connect-flash
                }

                // if the doctor is found but the password is wrong
                if (doctor && !doctor.validPassword(req.body.password)) {
                    return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.')); // create the loginMessage and save it to session as flashdata
                }

                // all is well, return successful doctor
                return done(null, doctor);
            });
        }));
};

// =========================================================================
// LOCAL LOGIN FOR PATIENTS
// =========================================================================
// we are using named strategies since we have one for login and one for signup
// by default, if there was no name, it would just be called 'local'

passport.use('local-login', new LocalStrategy({
        // by default, local strategy uses Patientsname and password, we will override with email
        email: 'email',
        password: 'password',
        passReqToCallback: true // allows us to pass back the entire request to the callback
    },
    function (req, email, password, done) { // callback with email and password from our form

        // find a Patients whose email is the same as the forms email
        // we are checking to see if the Patients trying to login already exists
        db.Patients.findOne({
            where: {
                email: req.body.email
            }
        }).then(function (Patients, err) {
            // if there are any errors, return the error before anything else         

            if (err) {
                return done(err);
            }

            if (!Patients) {
                return done(null, false, req.flash('loginMessage', 'No Patients found.')); // req.flash is the way to set flashdata using connect-flash
            }

            // if the Patients is found but the password is wrong
            if (Patients && !Patients.validPassword(req.body.password)) {
                return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.')); // create the loginMessage and save it to session as flashdata
            }

            // all is well, return successful Patients
            return done(null, Patients);
        });
    }));
    