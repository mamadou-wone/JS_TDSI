var password = document.querySelector('#paswd')
var confirmPasswd = document.getElementById('confirm')
var btn = document.querySelector("#button")
var warning = document.getElementById('warning')
var secondWarning = document.getElementById('confirmWarning')
var greenWarning = document.querySelector("#greenPass")

btn.disabled = true;

var checkEntry = (passwd) => {
    let num = 0;
    for (let i = 0; i < passwd.length; i++) {
        if (!isNaN(passwd[i])) {
            num++;
        }
    }
    return num;
}


password.addEventListener("keyup", () => {
    if (password.value.length > 0 && password.value.length <= 4) {
        warning.innerHTML = "Votre mot de passe est trop court"
        warning.style.display = "contents";
        greenWarning.style.display = "none";
    } else if (password.value.length > 10) {
        warning.innerHTML = "Votre mot de passe est trop long"
        warning.style.display = "contents";
        greenWarning.style.display = "none";
    } else {
        warning.style.display = "none";
        if (checkEntry(password.value) >= 2 && checkEntry(password.value) <= 4) {
            greenWarning.innerHTML = "Mot de passe fort";
            greenWarning.style.display = "contents";
        } else {
            warning.innerHTML = "Votre mot de passe doit contenir au max 4 chiffres"
            warning.style.display = "contents";
            greenWarning.style.display = "none";
        }
    }
})

confirmPasswd.addEventListener("keyup", () => {
    if (confirmPasswd.value != "" && password.value != "" && confirmPasswd.value != password.value) {
        secondWarning.innerHTML = "Mot de passe non identique";
        secondWarning.style.display = "contents";
        document.querySelector("#much").style.display = "none";
        btn.disabled = true;
    } else if (confirmPasswd.value == password.value) {
        secondWarning.style.display = "none";
        document.querySelector("#much").innerHTML = "Mot de pass identique";
        document.querySelector("#much").style.display = "contents";
        btn.disabled = false;
    } else if (confirmPasswd.value == "" || password.value == "") {
        secondWarning.innerHTML = "Le champ est vide";
        secondWarning.style.display = "contents";
        document.querySelector("#much").style.display = "none";
        btn.disabled = true;
    }

})

btn.addEventListener("click", () => {
    alert("Votre mot de pass est suffisamment sûr :)")
    password.value = "";
    confirmPasswd.value = "";
    document.querySelector("#much").style.display = "none";
    greenWarning.style.display = "none";
    btn.disabled = true;
})