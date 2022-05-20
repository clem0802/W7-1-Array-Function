/*----------------------------*/
2022.01.06 (Thursday SESSION) ARRAY-FUNCTION

let scores = [90,200,150,50];
let lastScore = scores.pop();
console.log(lastScore);


// array methods MDN
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
.shift() remove the 1st position
.unshift() add to the 1st position
.indexOf() to obtain the index position of an element
.splice(pos, 1) remove an item by index position



/*----------------------------*/
/*----------------------------*/
=> FUNCTIONS

function listMyFriends(){
    console.log("John","Jane","Irna")
} // => here only create the function
listMyFriends(); // => here we call the function

/*----------------------------*/
function getFavoriteFruit(){
    let myFruit = "apple"; // a variable, it works ONLY inside the function
    console.log(myFruit);
}
getFavoriteFruit();



/*----------------------------*/
/*----------------------------*/
=> PARAMETER

function getName(firstName){ //
    console.log(firstName);
}
getName("Elif"); // => here we call the function


function getName(firstName, lastName, age){ //
    console.log(firstName + " " + lastName + " " + age);
}
getName("Elif", "Balci", 25); // => here we call the function
// Elif Balci 25



/*----------------------------*/
/*----------------------------*/
=> RETURN
function myAge(age){
    let myAgeInTenYears = age + 10;
    return myAgeInTenYears;
}

let newAge = myAge(25);
console.log(myAgeInTenYears); 
// 35


/*----------------------------*/ (Yamit) I got lost
function newSum (number1, number2){
    letSumUp = number1 + number2;
    return letSumUp;
}
let totalSum = newSum(5, 3)
console.log(totalSum)


/*----------------------------*/ (course, exo)
let myInfo = ["Elif", 25, true]
function getDataTypes(array){
    let types = [];
    for(let i=0;i<array.length;i++){
        types[i]=typeof(array[i])
    }
    return types;
}
console.log(getDataTypes(myInfo));
// ['string', 'number', 'boolean']


/*----------------------------*/ (course, exo simple)
let myFruits = ["banana", "berries", "apple"];
let myInfo = ["Elif", 25, true];
let numbers = [4,5,7,8];

function listFruits(a){
    for(let i=0;i<a.length;i++){
        console.log(a[i]);
    }
}
listFruits(myFruits); 
// banana
// berries
// apple
listFruits(myInfo);
// Elif
// 25
// true
listFruits(numbers);
// 4
// 5
// 7
// 8


/*----------------------------*/ (course, exo FRIENDS)
let myFriends = ["John", "Jane", "Irna"];
function listMyFriends(array){
    let friends = "";
    for(let i=0;i<array.length;i++){
        friends = friends + " and " + array[i]
    }
    let sentence = "My friends are: " + friends;
    return sentence;
}
console.log(listMyFriends(myFriends));
// My friends are:  and John and Jane and Irna



let myFriends = ["John", "Jane", "Irna"];
function listMyFriends(array){
    let friends = "";
    for(let i=0;i<array.length;i++){
        if(i===0){
            friends = friends + array[i]
        } else {
            friends = friends + " and " + array[i]
        }
    }
    let sentence = "My friends are: " + friends;
    return sentence;
}
console.log(listMyFriends(myFriends));
// My friends are: John and Jane and Irna

