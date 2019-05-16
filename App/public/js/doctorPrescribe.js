//update patient diary
$("#submitPrescription").on("click", function(event){
    event.preventDefault();

    var newDiaryEntry={
        drug=$("input:radio[name='selectdrug']:checked").val(),
        isTaken=$("input:radio[name='freqCheck']:checked").val(),
        feedback=$("#newDiary").val().trim()
    };
    $.ajax({
        type: "POST",
        url: "/api/journal",
        data: newDiaryEntry
    }).then(function(data){
        window.location.href="/patient/:idp/profile"
    });
});