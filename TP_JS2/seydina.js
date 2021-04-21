// *********FORM*******
var nameF = document.getElementById('name');
var prenom = document.getElementById('prenom');
var number = document.getElementById('number');


// ************BUTTON****************
var add = document.getElementById('add');
var recherche = document.getElementById('update');
var deleteB = document.getElementById('delete');
var retrieve = document.getElementById('get');


// var verifLetters = (chaine) => {
//     let letter = /^[a-zA-Z]+$/
//     if (chaine.value.match(letter)) {
//         return true;
//     } else {
//         return false;
//     }
// }
var addFunction = () => {

    let info = {
        "Nom": nameF.value,
        "Prénom": prenom.value,
        "Number": number.value
    }
    localStorage.setItem(number.value, JSON.stringify(info));
    // console.log(info);
    // let test = JSON.parse(localStorage["778951341"])
    // console.log(localStorage["778951341"]);
    // console.log(test['Number']);

}

add.addEventListener('click', addFunction);

retrieve.addEventListener('click', () => {
    for (let i = 0; i < localStorage.length; i++) {
        console.log(localStorage.key(i));
        console.log(JSON.parse(localStorage[localStorage.key(i)]));

    }
});


deleteB.addEventListener('click', () => {
    let confirm = prompt("Entrer le nuuméro à supprimer!");
    if (localStorage[confirm]) {
        localStorage.removeItem(confirm);
        alert("Suppression faite")
    } else {
        alert("Le numéro n'existe pas dans notre BD!");
    }
});

recherche.addEventListener('click', () => {
    let number = prompt("Entrer les info à rechercher");
    if (localStorage[number]) {
        console.log(JSON.parse(localStorage[number]));
    } else {
        alert("Nékoufi")
    }
})