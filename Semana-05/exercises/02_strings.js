console.log("-------------------------EXERCISE 2 : STRINGS-------------------------");

console.log("------------EXERCISE 2.a------------");

var upperStr = "What does the fox say?"

console.log(upperStr.toUpperCase());

console.log("------------EXERCISE 2.b------------");

var subVariable = "Lorem ipsum dolor sit amet consectetur"
var subVariableResult = subVariable.substring(0, 5);

console.log(
    "My variable is '" +
    subVariable +
    "' and its first five characters are '" +
    subVariableResult + "'"
)

console.log("------------EXERCISE 2.c------------");

var subEndVariable = "Lorem ipsum dolor sit amet consectetur"
var subEndVariableResult = subVariable.substring(35, 38);

console.log(
    "My variable is '" +
    subEndVariable +
    "' and its last three characters are '" +
    subEndVariableResult + "'"
)

console.log("------------EXERCISE 2.d------------");

var capitalizedVariable = "lorem ipsum dolor sit amet consectetur"
var resultCapitalizedVariable =
    capitalizedVariable.substring(0, 1).toUpperCase() +
    capitalizedVariable.substring(1, 38).toLowerCase();

console.log(resultCapitalizedVariable);

console.log("------------EXERCISE 2.e------------");

var indexedVariable = "Lorem ipsum dolor sit amet consectetur"
var firstSpIndex = indexedVariable.indexOf(" ");

console.log("My string is '" +
    indexedVariable +
    "' and the first space is indexed at the "+
    firstSpIndex +
    "th column"
);

console.log("------------EXERCISE 2.f------------");

var longWord = "esternocleidomastoideo"
var secLongWord = "electroencefalografista"
var capitalizedLongWords =
    longWord.substring(0, 1).toUpperCase() +
    longWord.substring(1, 39).toLowerCase() + " " +
    secLongWord.substring(0, 1).toUpperCase() +
    secLongWord.substring(1, 42).toLowerCase();

console.log(capitalizedLongWords);