 // #  ___       __   ________  ________   _______      
 // # |\  \     |\  \|\   __  \|\   ___  \|\  ___ \     
 // # \ \  \    \ \  \ \  \|\  \ \  \\ \  \ \   __/|    
 // #  \ \  \  __\ \  \ \  \\\  \ \  \\ \  \ \  \_|/__  
 // #   \ \  \|\__\_\  \ \  \\\  \ \  \\ \  \ \  \_|\ \ 
 // #    \ \____________\ \_______\ \__\\ \__\ \_______\
 // #     \|____________|\|_______|\|__| \|__|\|_______|


 var nameF = document.getElementById("name");
 var number = document.getElementById("number");
 var btn = document.getElementById("button");


 btn.addEventListener("click", () => {
     if (number.value != "" && nameF.value != "") {
         localStorage.setItem(number.value, nameF.value);
     } else {
         alert("Les champs du formulaire sont vides");
     }

 });

 document.getElementById('update').addEventListener('click', () => {
     let number = prompt("Entrer le numéro à modifier");
     if (localStorage[number] != null) {
         let name = prompt("Enter the new name");
         localStorage.setItem(number, name);
         alert("Modifications réussies");
     } else {
         alert("Ce numéro n'existe pas dans la base de donnée");
     }
 });

 document.getElementById("delete").addEventListener('click', () => {
     let number = prompt("Enter the number that u want to delete ");
     if (localStorage[number] != null) {
         localStorage.removeItem(number);
         alert("Supression réussies");
     } else {
         alert("Ce numéro n'existe pas dans la base de donnée");
     }

 });

 document.getElementById('get').addEventListener("click", () => {
     console.log(localStorage);
 });