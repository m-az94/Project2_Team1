// Create New Patient Account
$("#add-account").on("click", function (event) {
  event.preventDefault();

  // Make a newAccount object
  var newAccount = {
    name: $("#inputName").val().trim(),
    healthcard: $("#inputHealthCard").val().trim(),
    phone: $("#inputPhone").val().trim(),
    city: $("#inputCity").val().trim(),
    email: $("#inputEmail").val().trim(),
    password: $("#inputPassword").val().trim()
  };

  if (newAccount.password.length > 0 && newAccount.phone.length > 0 && newAccount.email.length > 0 && newAccount.city.length > 0 && newAccount.name.length > 0) {
    $.ajax({
      type: "post",
      url: "/signup",
      data: newAccount
    }).then(function (data) {
      window.location.href = "/"
    });
  }else {
    $("#create-err-msg").empty("").text("**Please fill out entire form**");
  }
});