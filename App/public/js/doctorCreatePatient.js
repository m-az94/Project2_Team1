// Create New Patient Account
$("#add-account").on("click", function (event) {
  event.preventDefault();

  // Make a newAccount object
  var newAccount = {
    fullname: $("#p-name").val().trim(),
    doctor_id: $("checkbox:checked").val(),
    healthcard: $("#p-healthCard").val().trim(),
    phone: $("#p-phone").val().trim(),
    email: $("#p-email").val().trim(),
    password: Math.floor(Math.random()*8999)+1000
  };

  if (newAccount.password.length > 0 && newAccount.phone.length > 0 && newAccount.email.length > 0 && newAccount.name.length > 0) {
    $.ajax({
      type: "POST",
      url: "/api/patients",
      data: newAccount
    }).then(function (data) {
      window.location.href = "/doctor/:idd/confirmPatient"
    });
  }else {
    $("#create-err-msg").empty("").text("**Please fill out entire form**");
  }
});