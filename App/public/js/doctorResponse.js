$("#response").on("click", function(event){
    event.preventDefault();
    var newResponse ={
        journal_id:$("#response").val().trim(),
        response:$("input[name='response']:checked").val()
    };
    var doctor_id=$("#response").attr("data-doctorID");
    var patient_id=$("#response").attr("data-patientID");


    $.ajax({
        type: "POST",
        data: newResponse
    }).then(function(data){
        window.location.href="/doctor/"+doctor_id+"/patient/"+patient_id+"/profile";
    });
});