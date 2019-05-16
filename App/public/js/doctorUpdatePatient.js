// Update Patient Account
$("#update-account").on("click", function (event) {
    event.preventDefault();

    // capture All changes
    var changeAccount = {
        name: $("#inputName").val().trim(),
        healthcard: $("#inputHealthCard").val().trim(),
        phone: $("#inputPhone").val().trim(),
        city: $("#inputCity").val().trim(),
        email: $("#inputEmail").val().trim(),
        password: $("#inputPassword").val().trim(),
        account_id: $("#account-number").attr("data-accountid")
    };
    $("#err-msg").empty("");
    $("#change-account-modal").modal("show");

    if (changeAccount.password.length > 0 && changeAccount.phone.length > 0 && changeAccount.email.length > 0 && changeAccount.city.length > 0 && changeAccount.name.length > 0) {
        $.ajax({
            type: "PUT",
            url: "/accounts/" + changeAccount.account_id + "/" + changeAccount.account_key,
            data: changeAccount
        }).then(
            function () {
                // Reload the page to get the updated list
                location.reload();
            }
        );
    } else {
        $("#update-err-msg").empty("").text("**Please fill out entire form**");
    }
});