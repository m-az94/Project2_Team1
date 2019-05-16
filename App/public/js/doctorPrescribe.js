//update patient diary
$("#submitPrescription").on("click", function(event){
    event.preventDefault();

    var doctor_id=$("submitPrescription").val();

    var newPrescription={
        patientID=$("input:radio[name='patient']:checked").val(),
        drug=$("#inputPrescription").val().trim(),
        frequency=$("#inputFreq").val().trim()
    };
    $.ajax({
        type: "POST",
        url: "/api/journal",
        data: newPrescription
    }).then(function(data){
        window.location.href="/patient/"+doctor_id+"/profile";
    });
});