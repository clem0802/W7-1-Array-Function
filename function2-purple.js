/*-----------------------*/
// inside the function add another display statement that checks if "points" is greater than "required"
function checkPoints() {
    var points = 7;
    var required = 10;
    console.log("Requirement reached");
    console.log(points > required); // false
}
checkPoints();


/*-----------------------*/ PARAMETER
// parameters help us pass specific information to functions
function checkScore(attempt){
    var highScore = 97;
    console.log(attempt > highScore);
}
checkScore(55); // false


/*-----------------------*/
function makeJokeName() { 
    var first = "Kitty "; 
    var last = "Perry"; 
    return first + last; 
   } 
var joke = makeJokeName(); 
console.log(joke); // Kitty Perry


/*-----------------------*/
function getArea(height) {
    var width = 26;
    return width * height;
   }
console.log(getArea(100)); // 2600


/*-----------------------*/ 
https://dev.getmimo.com/challenge?track=50&course=1010&chapter=7873&lesson=1 (5/11)
// Code a function that takes an array of numbers as a parameter 
// and returns the average of them as the result.
(below from Elif):
// There is always the possibility of the array being an empty one unless stated otherwise.
// So first you need check if the length of the array is 0 with an if statement. 
// Return 0 if array.length === 0.
// If not, then use for loops to iterate through the array to calculate the sum of all the elements, 
// then divide it by the length and return the average.

function average(array) {
  var total = 0;
  if (array.length === 0) {
      return total;
  }
  for (var i = 0; i < array.length; i++) {
      total += array[i];
  }
  return total / array.length;
}


/*-----------------------*/
https://dev.getmimo.com/challenge?track=50&course=1010&chapter=7808&lesson=1 (6/11)
// Code a function that returns true if the array parameter contains the number parameter and otherwise returns false.
// Examples: contains([1, 2, 3, 4], 3) returns true. contains([2, 2, 4], 3) returns false.
function contains(array, number) {
 
} // STARTER CODE

function contains(array, number) {
    for (var i = 0; i < array.length; i++) {
     if (array[i] === number) {
      return true;
     }
    }
    return false;
   }


/*-----------------------*/
https://dev.getmimo.com/challenge?track=50&course=1010&chapter=7850&lesson=1 (7/11)
// Code a function that returns the first and last elements of its array parameter in a new array.
function firstLast(array) {
    var first = array[0];
    var last = array[array.length - 1];
   
    var newArray = [];
    newArray.push(first);
    newArray.push(last);
   
    return newArray;
   }


/*-----------------------*/
https://dev.getmimo.com/challenge?track=50&course=1010&chapter=7809&lesson=1 (8/11) HARD!!
// Code a function that takes an array of numbers 
// and returns the difference between the biggest and the smallest number as a result.
function differenceMinMax(array) {
 
} // STARTER CODE

function differenceMinMax(array) {
    var min = array[0];
    var max = array[0];
    for (var i = 0; i < array.length; i++) {
     if (array[i] > max) {
      max = array[i];
     }
     if (array[i] < min) {
      min = array[i];
     }
    }
    return max-min;
   }


/*-----------------------*/
https://dev.getmimo.com/challenge?track=50&course=1010&chapter=7861&lesson=1 (9/11)
// Code a function that returns the sum of the numbers that make up the parameter. 
// For example, if 3 is the argument, the return value should be 6, as 1 + 2 + 3 = 6.
// Examples: totalSum(5) returns 15. totalSum(4) returns 10.
function totalSum(number) {
  
} // STARTER CODE

function totalSum(number) {
    var total = 0;
    for (var i = 1; i <= number; i++) {
     total += i;
    }
    return total;
   }


/*-----------------------*/
https://dev.getmimo.com/challenge?track=50&course=1010&chapter=7852&lesson=1 (10/11)
// Code a function that returns the smallest number from the array parameter as a result.
// Examples: smallest([10,44,2,11]) returns 2. smallest([5,7,8,9]) returns 5.
function smallest(array) {
 
} // STARTER CODE

function smallest(array) {
    var smallest;
    smallest = array[0];
    for (var i = 0; i < array.length; i++) {
     if (array[i] < smallest) { //
      smallest = array[i]; //
     }
    }
    return smallest;
   }

/*-----------------------*/
https://dev.getmimo.com/challenge?track=50&course=1010&chapter=7851&lesson=1 (11/11)
// Examples: reverse([1,2,5,8]) returns [8,5,2,1]. reverse(["Deb","Lee"]) returns ["Lee","Deb"].
function reverse(array) {
var reversed = [];
for (var i = array.length - 1; i > -1; i--) {
    reversed.push(array[i]);
}
return reversed;
}

function reverse(array) {
var inversé = [];
for (var i = array.length - 1; i > -1; i--) {
    inversé.push(array[i]);
}
return inversé;
}