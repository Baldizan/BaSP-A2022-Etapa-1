console.log("-------------------------EXERCISE 2 : STRINGS-------------------------");

console.log("------------EXERCISE 2.a------------");

var upperStr = "What does the fox say?";

console.log(upperStr.toUpperCase());

console.log("------------EXERCISE 2.b------------");

var subVariable = "Lorem ipsum dolor sit amet consectetur";
var subVariableResult = subVariable.substring(0, 5);

console.log(
    "My variable is '" +
    subVariable +
    "' and its first five characters are '" +
    subVariableResult + "'"
);

console.log("------------EXERCISE 2.c------------");

var subEndVariable = "Lorem ipsum dolor sit amet consectetur";
var subEndVariableResult = subVariable.substring(subVariable.length - 3);

console.log(
    "My variable is '" +
    subEndVariable +
    "' and its last three characters are '" +
    subEndVariableResult + "'"
);

console.log("------------EXERCISE 2.d------------");

var capitalizedVariable = "lorem ipsum dolor sit amet consectetur";
var resultCapitalizedVariable =
    capitalizedVariable.substring(0, 1).toUpperCase() +
    capitalizedVariable.substring(1, 38).toLowerCase();

console.log(resultCapitalizedVariable);

console.log("------------EXERCISE 2.e------------");

var indexedVariable = "Lorem ipsum dolor sit amet consectetur";
var firstSpIndex = indexedVariable.indexOf(" ");

console.log(
    "My string is '" +
    indexedVariable +
    "' and the first space is indexed at the " +
    firstSpIndex +
    "th column"
);

console.log("------------EXERCISE 2.f------------");

var longWords = "esternocleidomastoideo electroencefalografista";
var capitalizedLongWords =
    longWords.substring(0, 1).toUpperCase() +
    longWords.substring(1, 23).toLowerCase() +
    longWords.substring(longWords.indexOf(" ") + 1, longWords.indexOf(" ") + 2).toUpperCase() +
    longWords.substring(longWords.indexOf(" ") + 2).toLowerCase();

 console.log(capitalizedLongWords);
