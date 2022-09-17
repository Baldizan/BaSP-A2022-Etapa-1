console.log("-------------------------EXERCISE 4 : IF ELSE-------------------------");

console.log("------------EXERCISE 4.a------------");

var randomNumber = Math.random();

if (randomNumber >= 0.5) {
    console.log(randomNumber + " is greater than 0,5")
} else {
    console.log(randomNumber + " is lower than 0,5")
};

console.log("------------EXERCISE 4.b------------");

var age = Math.floor(Math.random()*101);

if (age < 2) {
    console.log(age + " Baby")
} else if (age >= 2 && age <= 12) {
    console.log(age + " Child")
} else if (age >= 13 && age <= 19) {
    console.log(age + " Teenager")
} else if (age >= 20 && age <= 30) {
    console.log(age + " Young adult")
} else if (age >= 31 && age <= 60) {
    console.log(age + " Adult")
} else if (age >= 61 && age <= 75) {
    console.log(age + " Young elderly")
} else {
    console.log(age + " Elerly")
};

