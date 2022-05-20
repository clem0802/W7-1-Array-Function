2022.01.07 (Dashboard Study Plan - SPRINT 5: Functions)
// how do we decide a function's input? 
// => based on the output we want

/*----------------------------*/
/*----------------------------*/
function greet(name){
    console.log("Hello, " + name);
}
greet("April");
greet("Leslie");
// Hello, April
// Hello, Leslie


/*----------------------------*/ (simplified version / Yamit)
function sumTotal(price, tax){
    console.log(price + tax);
}
sumTotal(1000, 250); // 1250


/*----------------------------*/
function displayHalf(number){
    var half = number / 2;
    console.log(half);
}
displayHalf(10); // 5

function doubleNumber(number){
    var result = number * 2;
    console.log(result);
}
doubleNumber(5); // 10


/*----------------------------*/
function SVGFEColorMatrixElement(first, second, third){
    console.log(first + second + third);
}
var result = mix("Peter", "Piper", "Picked"); // PeterPiperPicked


/*----------------------------*/
// pass the "students" ARRAY to the "displayNames()" FUNCTION
function displayNames(names){
    console.log(names);
}
var students = ["Laurel", "Yanni"];
displayNames(students); // ["Laurel", "Yanni"]

/*-----------*/
function displayNames(names){
    console.log(names.length);
}
var students = ["Laurel", "Yanni"];
displayNames(students); // 2

/*-----------*/
function displayNames(names){
    console.log(names[0]);
}
var students = ["Laurel", "Yanni"];
displayNames(students); // Laurel




/*----------------------------*/
/*----------------------------*/
// a function can return a SINGLE VALUE
/*--------------------*/
function userAge(number){
    var age = "User age: " + number;
    return age;
}
console.log(userAge(22)); // User age: 22


/*--------------------*/
function userAge(number){
    var age = "User age: " + number;
    return age;
}
var result = userAge(29);
console.log(result); // User age: 29


/*--------------------*/
function giveMeTen(){
    return 10;
}
console.log(giveMeTen()); // 10


/*--------------------*/
function addGreeting(user){
    var greeting = "Greetings: " + user;
    return greeting; // RETURN variable
}
var result = addGreeting("Isaac");
console.log(result); // Greetings: Isaac


/*--------------------*/ (BOOLEAN)
function isFreezing(temperature){
    return temperature < 0;
}
var freezing = isFreezing(-3);
console.log(freezing); // true


/*--------------------*/ (BOOLEAN)
function isRentingAge(age){
    return age >= 25;
}
var canRent = isRentingAge(25);
console.log(canRent); // true


/*--------------------*/ (BOOLEAN)
function lessThanFive(number){
    var lessThan = number < 5;
    return lessThan;
}
var result = lessThanFive(10);
console.log(result); // false


/*--------------------*/
function createID(name, year){
    return name + year + "@hutmail.com"; // RETURN parameters
}
var email = createID("jo", "1998");
console.log(email); // jo1998@hutmail.com


/*--------------------*/
function getListOfNames(names){
    return names[0] + ", " + names[1];
}
var students = ["Vera", "Robin"];
var list = getListOfNames(students);
console.log(list); // Vera, Robin


/*--------------------*/
// how do we decide what to return for a function with an array as a parameter?
// => we decide if we need the entire array or just a value from it
function displayGroupInfo(array) {
    console.log(group.length);
    console.log(group[1]);
}  
var group = ["Lorenzo", "Yanni"];
displayGroupInfo(group); 
// 2
// Yanni


/*--------------------*/ => TAN Isaac
/*--------------------*/ => TAN Isaac
function getFullName(group) {
    return group[1] + " " + group[0];
}
var scientist = ["Isaac", "TAN"];
var name = getFullName(scientist);
console.log(name); // TAN Isaac


/*--------------------*/
function timesTen(number){
    var result = number * 10;
    return result;
} 


/*--------------------*/
function greaterThanTen(number){
    var isGreater = number > 10;
    return isGreater;
}


/*--------------------*/
// return the array's second element
function getSecondName(name){
    return name[1];
}
var guest = ["Flossie", "Staal"];
var name = getSecondName(guest);
console.log(name); // Staal


/*--------------------*/
function getAverage(grades){
    return (grades[0] + grades[1] + grades[2]) / 3;
}
var grades = [10, 5, 8];
var average = getAverage(grades);
console.log(average); // 7.666666666666667


/*--------------------*/
function calculateSum(a, b){
    return a + b;
}
function calculateDifference(a, b){
    return a - b;
}
var sum = calculateSum(30, 11);
var difference = calculateDifference(30, 11);
console.log(sum); // 41
console.log(difference); // 19