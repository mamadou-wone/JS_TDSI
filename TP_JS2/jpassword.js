var password = $('#paswd')
var confirmPasswd = $('#confirm')
var btn = $("#button")
var warning = $('#warning')
var secondWarning = $('#confirmWarning')
var greenWarning = $("#greenPass")

btn.prop('disabled', true)


var checkEntry = (passwd) => {
    let num = 0;
    for (let i = 0; i < passwd.length; i++) {
        if (!isNaN(passwd[i])) {
            num++;
        }
    }
    return num;
}



$(document).ready(() => {

    password.on("keyup", () => {
        if (password.val().length > 0 && password.val().length <= 4) {
            warning.text("Votre mot de passe est trop court");
            warning.show();
            greenWarning.hide();
        } else if (password.val().length > 10) {
            warning.text("Votre mot de passe est trop long");
            warning.show();
            greenWarning.hide();
        } else {
            warning.hide();
            if (checkEntry(password.val()) >= 2) {
                greenWarning.text("Mot de passe fort");
                greenWarning.show();
            } else {
                warning.text("Votre mot de passe doit contenir au max 4 chiffres")
                warning.show();
                greenWarning.hide();
            }
        }
    })

    confirmPasswd.on("keyup", () => {
        if (confirmPasswd.val() != "" && password.val() != "" && confirmPasswd.val() != password.val()) {
            secondWarning.text("Mot de passe non identique");
            secondWarning.show();
            $("#much").hide();
            btn.prop('disabled', true);
        } else if (confirmPasswd.val() == password.val()) {
            secondWarning.hide();
            $("#much").text("Mot de pass identique");
            $("#much").show();
            btn.prop('disabled', false);
        } else if (confirmPasswd.val() == "" || password.val() == "") {
            secondWarning.text("Le champ est vide");
            secondWarning.show();
            $("#much").hide();
            btn.prop('disabled', true);
        }

    })

    btn.on("click", () => {
        alert("Votre mot de pass est suffisamment sûr :)")
        password.val("");
        confirmPasswd.val("");
        $("#much").hide();
        greenWarning.hide();
        btn.prop('disabled', true);
    });
})