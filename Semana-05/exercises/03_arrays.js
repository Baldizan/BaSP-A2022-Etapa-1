console.log("-------------------------EXERCISE 3 : ARRAYS-------------------------");

console.log("------------EXERCISE 3.a------------");

var monthsArray = [
    "Enero","Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
    "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

console.log(monthsArray[4], monthsArray[10]);

console.log("------------EXERCISE 3.b------------");

console.log(monthsArray.sort());

console.log("------------EXERCISE 3.c------------");

console.log(monthsArray, monthsArray.unshift("Start"), monthsArray.push("End"));

console.log("------------EXERCISE 3.d------------");

console.log(monthsArray, monthsArray.shift("Start"), monthsArray.pop("End"));

console.log("------------EXERCISE 3.e------------");

console.log(monthsArray.reverse());

console.log("------------EXERCISE 3.f------------");

console.log(monthsArray.join("-"));

console.log("------------EXERCISE 3.g------------");

var copyMonthsArray = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
    "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

console.log(copyMonthsArray.slice(4, 11));