 // #  ___       __   ________  ________   _______      
 // # |\  \     |\  \|\   __  \|\   ___  \|\  ___ \     
 // # \ \  \    \ \  \ \  \|\  \ \  \\ \  \ \   __/|    
 // #  \ \  \  __\ \  \ \  \\\  \ \  \\ \  \ \  \_|/__  
 // #   \ \  \|\__\_\  \ \  \\\  \ \  \\ \  \ \  \_|\ \ 
 // #    \ \____________\ \_______\ \__\\ \__\ \_______\
 // #     \|____________|\|_______|\|__| \|__|\|_______|


 // *********FORM*******
 var nameF = document.getElementById('name');
 var prenom = document.getElementById('prenom');
 var number = document.getElementById('number');


 // ************BUTTON****************
 var add = document.getElementById('add');
 var recherche = document.getElementById('update');
 var deleteB = document.getElementById('delete');
 var retrieve = document.getElementById('get');


 var addFunction = () => {
     if (isNaN(nameF.value) && isNaN(prenom.value) && !(isNaN(number.value)) && number.value.length == 9) {
         let info = {
             "Nom": nameF.value.toUpperCase(),
             "Prénom": prenom.value.toUpperCase(),
             "Number": number.value
         }
         localStorage.setItem(number.value, JSON.stringify(info));
         alert("Ajout effectué")
         nameF.value = "";
         prenom.value = "";
         number.value = "";

     } else {
         alert("Verifier les infos saisies !")
     }

     // console.log(info);
     // let test = JSON.parse(localStorage["778951341"])
     // console.log(localStorage["778951341"]);
     // console.log(test['Number']);

 }

 add.addEventListener('click', addFunction);

 retrieve.addEventListener('click', () => {
     let data = null;
     let value = '';
     for (let i = 0; i < localStorage.length; i++) {
         // console.log(localStorage.key(i));
         // console.log(JSON.parse(localStorage[localStorage.key(i)]));
         data = JSON.parse(localStorage[localStorage.key(i)]);
         value += `Nom: ${data['Nom']} - Prénom: ${data['Prénom']} - Numéro: ${data['Number']} \n`
     }
     alert(value)
 });


 deleteB.addEventListener('click', () => {
     let confirm = prompt("Entrer le numéro à supprimer!");
     if (localStorage[confirm]) {
         localStorage.removeItem(confirm);
         alert("Suppression faite")
     } else {
         alert("Le numéro n'existe pas dans notre BD!");
     }
 });

 recherche.addEventListener('click', () => {
     let search = prompt("Entrer les info à rechercher");
     let data = null;
     let isPresent = false;
     let show_info = ''
     if (isNaN(search)) {
         for (let i = 0; i < localStorage.length; i++) {
             data = JSON.parse(localStorage[localStorage.key(i)])
             if (data["Nom"] == search.toUpperCase() || data["Prénom"] == search.toUpperCase()) {
                 console.log(data);
                 show_info += `Nom: ${data['Nom']} - Prénom: ${data['Prénom']} - Numéro: ${data['Number']} \n`
                 isPresent = true;
                 console.log(show_info);
             }
         }
     } else if (localStorage[search]) {
         data = JSON.parse(localStorage[search])
         show_info = `Nom: ${data['Nom']} - Prénom: ${data['Prénom']} - Numéro: ${data['Number']}`
         isPresent = true;
     }

     if (isPresent) {
         alert(show_info);
     } else {
         alert("Wadjie nékoufi sa waye")
     }
 })