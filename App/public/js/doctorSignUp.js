$("newDoctor").on("click", function(event){
    event.preventDefault();

    var newAccount={
        name:$("#d-name").val().trim(),
        city: $("#d-city").val().trim(),
        speciality: $("d-speciality").val().trim() ,
        MINC: $("#d-minc").val().trim(),
        email: $("#d-email").val().trim(),
        password: $("#d-password").val().trim()
    };

    if (newAccount.password.length > 0 && newAccount.phone.length > 0 && newAccount.email.length > 0 && newAccount.name.length > 0) {
        $.ajax({
          type: "POST",
          url: "/api/doctors",
          data: newAccount
        }).then(function (data) {
            var doc=data;
          window.location.href = "/doctor/"+doc.id+"/createPatient";
        });
      }
      else {
        $("#err").empty("").text("**Please fill out entire form**");
      }

});