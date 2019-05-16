// Delete Patient Account
$("#deletePatient").on("click", function(event){
  event.preventDefault();
  var patientDelete=$("input[name=patient]:checked").val();
  var doctorID=$("#deletePatient").val();

  $.ajax({
    type: "DELETE",
    url: "/api/patients/"+patientDelete
  }).then(function(){
    window.location.href="doctor/"+doctorID+"/profile";
  });
});


// -------- OLD CODE

// $("#deletePatient").on("click", function (event) {
//     event.preventDefault();
//     $("#err-msg").empty("");
//     $("#delete-account-modal").modal("show");
//   });
  
//   $("#confirm-delete").on("click", function (event) {
//     var deleteAccount = {
//       email: $("#email").val().trim(),
//       password: $("#password").val().trim(),
//     }
//     console.log(deleteAccount);
//     if (deleteAccount.email.length > 0 && deleteAccount.password.length > 0) {
//       $.ajax("/accounts/" + deleteAccount.email + "/" + deleteAccount.password, {
//         type: "DELETE"
//       }).then(
//         function () {
//           console.log("deleted account", deleteAccount.email);
//           // Reload the page to get the updated list
//           location.reload();
//         }    
//       );
//     } else {
//       $("#err-msg").empty("").text("fill out entire form");
//     }
//   });