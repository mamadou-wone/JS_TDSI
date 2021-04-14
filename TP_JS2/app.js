var myList = ["-", " ", ",",
    ".", "_", "'", "!", "$", '&', ":", '?'
]



replaceAll = (word) => {
    newWord = ""
    start = true;
    newList = []
    var j = 0;
    while (j < word.length) {
        for (let i = 0; i < myList.length; i++) {
            if (word[j] == myList[i]) {
                newWord = word.replace(word[j], "");
                word = newWord;
            }
        }
        j++;
    }

    return newWord;
}

// var initialWord = "Karine alla en Irak";
// var initialWord = "Ete";
// var initialWord = "Radar";
// var initialWord = "Eh ! ca va la vache ?";
// var initialWord = "A l'etape, epate-la !"
var initialWord = "La mère Gide digère mal."
var newString = "";
var reverseWord = "";

for (let i = 0; i < initialWord.length; i++) {
    if (initialWord[i] == " ") {
        newString = replaceAll(initialWord);
        break;
    } else {
        newString = initialWord;
    }

}
var concatString = newString.replace(" ", "").toLocaleLowerCase();
console.log(concatString);

for (let i = concatString.length - 1; i >= 0; i--) {
    reverseWord += concatString[i];
}

if (concatString == reverseWord) {
    console.log("On a affaire à un Palindrome");
} else {
    console.log("Ce mot n'est pas un Palindrome");
}

console.log(concatString);
console.log(reverseWord);