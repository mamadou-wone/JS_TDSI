//   ___       __   ________  ________   _______      
//  |\  \     |\  \|\   __  \|\   ___  \|\  ___ \     
//  \ \  \    \ \  \ \  \|\  \ \  \\ \  \ \   __/|    
//   \ \  \  __\ \  \ \  \\\  \ \  \\ \  \ \  \_|/__  
//    \ \  \|\__\_\  \ \  \\\  \ \  \\ \  \ \  \_|\ \ 
//     \ \____________\ \_______\ \__\\ \__\ \_______\
//      \|____________|\|_______|\|__| \|__|\|_______|




// ***********************EXO1*******************************

// start = true
// while (start) {
//     prenom = prompt("Donnez votre prénom ")
//     nom = prompt("Donnez votre nom")
//     if (prenom != "" && nom != "" && isNaN(prenom) && isNaN(nom)) {
//         start = false
//     }
// }
// alert('Bonjour ' + prenom + ' ' + nom)




// *****************EXO2*****************************
// start = true

// while (start) {
//     age = prompt('Donnez votre age ?')

//     if (!isNaN(age) && age > 0) {
//         if (age > 0 && age <= 6) {
//             alert('Vous êtes un jeune enfant.');
//             start = false
//         } else if (age > 6 && age <= 11) {
//             alert(" Vous êtes un enfant qui a atteint l'âge de raison.");
//             start = false
//         } else if (age > 11 && age <= 17) {
//             alert("  Vous êtes un adolescent.");
//             start = false
//         } else if (age > 17 && age <= 120) {
//             alert("  Vous êtes un adulte.");
//             start = false
//         }
//     } else {
//         alert("Enter un age valide");
//     }
// }


// -*****************************EXO3**********************

// start = true;

// while (start) {
//     number = prompt("Enter a number 🐱‍🏍");
//     if (!isNaN(number) && number > 0) {
//         ul = document.createElement('ul');
//         h2 = document.createElement('h2')
//         h2.textContent = "Voici la table de mutilication de " + number + " ";
//         for (let i = 0; i <= 10; i++) {
//             li = document.createElement('li');
//             li.textContent = number + " x " + i + " = " + number * i;
//             ul.appendChild(li);
//             document.body.appendChild(h2)
//             document.body.appendChild(ul)
//             start = false
//         }

//     } else {
//         alert("Enter a valid number 😥")
//     }
// }


// ********************************EXO4**********************************

// start = true;
// HTML = "HYPER TEXT MARKUP LANGAGE"
// count = 0;
// while (start) {
//     count++;
//     guess = prompt("Donner la signification de HTML: ")
//     if (guess.toLowerCase().localeCompare(HTML.toLowerCase()) == 0) {
//         document.write("Vous avez trouver la bonne signification 😎");
//         start = false;
//     }
//     if (count == 3) {
//         start = false;
//         document.write("Vous avez atteint le nombre max de tentative 😪")
//     }
// }


// *****************************Exo5************************

// random = () => {
//     return Math.floor(((Math.random() * 100) + 1));
// }
/*  */

test = "bonjour"


// start = true;
// let coup = 0;
// number = random()
// while (start) {
//     guess_number = prompt("Guess the number 😉")
//     if (!isNaN(guess_number)) {
//         if (guess_number < number) {
//             alert("Trop petir 😱");
//             coup++;
//         } else if (guess_number > number) {
//             alert("Trop grand 😱");
//             coup++;
//         } else {
//             alert("Bravo vous avez trouver le nombre caché 🤓 " + number + " avec " + coup + " coup");
//             start = false;
//         }
//     } else {
//         alert("Enter  a valid number:")
//         coup++;
//     }
// }



// *************************************EXO6*********************************
// div = document.createElement('div')
// div.id = "divTP1"
// strong = document.createElement('strong')
// div.innerHTML = `  Le <strong>World Wide Web Consortium</strong>, abrégé par le
// sigle <strong>W3C</strong>, est un
// <a href="http://fr.wikipedia.org/wiki/Organisme_de_normalisation"
// title="Organisme de
// normalisation">organisme de standardisation</a> à but non-lucratif
// chargé de promouvoir lacompatibilité des technologies du <a
// href="http://fr.wikipedia.org/wiki/World_Wide_Web" title="World
// Wide Web">World Wide Web</a>.`
// document.body.append(div)



// ***************************EXO7****************************
// langage = ['JavaScript', 'JScript', 'ActionScript', 'EX4']
// div = document.createElement('div')
// div.id = "divTP2"
// p = document.createElement('p')
// p.textContent = 'Langages basés sur ECMAScript :'
// ul = document.createElement('ul')
// langage.forEach(element => {
//     li = document.createElement('li');
//     li.textContent = element;
//     ul.appendChild(li)
// });
// document.body.append(p, ul)
// });
// document.body.append(p, ul)