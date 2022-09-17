console.log("-------------------------EXERCISE 5 : FOR-------------------------");

console.log("------------EXERCISE 5.a------------");

var fiveWords = ["first", "second", "third", "fourth", "fifth"];

for (i=0; i < fiveWords.length; i++) {
    alert(fiveWords[i])
};

console.log("------------EXERCISE 5.b------------");

for (i=0; i < fiveWords.length; i++) {
    alert(
        fiveWords[i].substring(0, 1).toUpperCase() +
        fiveWords[i].substring(1).toLowerCase()
    )
};

console.log("------------EXERCISE 5.c------------");

var sentence = "";

for (i=0; i < fiveWords.length; i++) {
    sentence += fiveWords[i] + " ";
};

alert (sentence.trim(-1));

console.log("------------EXERCISE 5.d------------");

var emptyAr = [];

for (i=0; i<10; i++) {
    emptyAr.push(i);
}

console.log(emptyAr);
