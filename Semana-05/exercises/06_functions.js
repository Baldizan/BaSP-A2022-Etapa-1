console.log("-------------------------EXERCISE 6 : FUNCTIONS-------------------------");

console.log("------------EXERCISE 6.a------------");

// function myFunction(a, b) {
//     var a = (prompt("Enter the first number "));
//     var b = (prompt("Enter the second number "));
//     return (parseFloat(a) + parseFloat(b));
// };

// var functionResult = myFunction();

// console.log(functionResult);

console.log("------------EXERCISE 6.b------------");

function myFunction(a, b) {
    var a = (prompt("6b -Enter the first number"));
    var b = (prompt("6b -Enter the second number"));
    if (a == parseFloat(a) && b == parseFloat(b)) {
        return (parseFloat(a) + parseFloat(b));
    } else {
        alert("Inputs must be numbers");
        return NaN;
    };
};

var functionResult = myFunction();

console.log(functionResult);

console.log("------------EXERCISE 6.c------------");

function validateInteger(a) {
    if (a ==  parseInt(a)) {
        return true;
    } else {
        return false;
    };
};

var validationResult = validateInteger();

console.log(validationResult);

console.log("------------EXERCISE 6.d------------");

function mySecondFunction(a, b) {
    var a = (prompt("6d - Enter the first number"));
    var b = (prompt("6d - Enter the second number"));
    if (validateInteger(a, b)) {
        return (parseInt(a) + parseInt(b));
    } else if (a !== parseInt(a) || b !== parseInt(b)){
        alert("Inputs must be integers");
        return ([Math.round(a), Math.round(b)]);
    } else {
        alert("Check your inputs!")
        return NaN;
    };
};

var secondFunctionResult = mySecondFunction();

console.log(secondFunctionResult);

console.log("------------EXERCISE 6.e------------");

function lastExercise (a, b) {
        if (validateInteger(a, b)) {
        return (parseInt(a) + parseInt(b));
    } else if (a !== parseInt(a) || b !== parseInt(b)){
        alert("Inputs must be integers");
        return [Math.round(a), Math.round(b)];
    } else {
        alert("Check your inputs!")
        return NaN;
    };
}

function myThirdFunction(a, b) {
    var a = (prompt("6e - Enter the first number"));
    var b = (prompt("6e - Enter the second number"));
    return lastExercise(a, b);
};

var thirdFunctionResult = myThirdFunction();

console.log(thirdFunctionResult);
