/*-------------------------------*/
var michael = 13;
var anna = 20;
var tina = 5;
var candidates = [michael, anna, tina];
console.log(candidates);
// [13, 20, 5]


/*-------------------------------*/
var first = "John";
var second = "Joseph";
var third = "Donnie";
var winners = [first, second, third]; 
console.log(winners[2]);
// Donnie


/*-------------------------------*/ (Purple Challenges:Arrays 6/10)
// Put the numbers 1 through 1000 in the myNumbers array. 
// Do not hard code the numbers.
var myNumbers = [];
for (var i = 1; i <= 1000; i++) {
 myNumbers.push(i);
}


/*-------------------------------*/ (modèle Internet)
var numbers = [10, 20, 30, 40] 
// sums to 100
var sum = 0;
for (var i = 0; i < numbers.length; i++) {
  sum += numbers[i]
}


/*-------------------------------*/ (Purple Challenges:Arrays 7/10)
var numbersToAdd = [10, 29, 37, 5, 18, 27, 15, 1, 1, 36, 18, 17, 29, 12, 28, 23,
    15, 5, 8, 23, 39, 30, 31, 28, 39, 32, 29, 30, 8, 4, 13, 7, 24, 22, 12, 23,
    6, 25, 39, 0]; 
// 798
var sum = 0;
for (var i = 0; i < numbersToAdd.length; i++) {
    sum += numbersToAdd[i];
}


/*-------------------------------*/ (Purple Challenges:Arrays 8/10)
// Combine the strings from the firstName and lastName arrays and put the result in the fullName array.
// Example: "Axe Rod"
var firstName = ['Axe','Miles','Maya'];
var lastName= ['Rod','Rhoades','Wagner'];

var fullName = [];
for(var i=0; i<lastName.length ; i++){
    fullName.push(firstName[i] + " " + lastName[i]);
}
console.log(fullName);
// [ 'Axe Rod', 'Miles Rhoades', 'Maya Wagner' ] 



/*-------------------------------*/ (Purple Challenges:Arrays 9/10)
https://dev.getmimo.com/challenge?track=50&course=1716&chapter=11543&lesson=1
// Code an array that contains the name of students in a class in this order, "Barry", "Mary", "Ann" 
// and an array that contains the students' grades in this order, "B", "A", "C". 
// Use a loop to find a student with an "A" grade 
// and add the name at that position in the students array to the deansList array.
var students = ["Barry", "Mary", "Ann"];;
var grades = ["B", "A", "C"];;
var deansList =[];
for(var i = 0; i < students.length; i ++){
    if(grades[i] === "A") {
        deansList.push(students[i]);
    }
  }
console.log(deansList);
// ['Mary']

/*--------------*/
var students = ["Barry", "Mary", "Ann"];
var grades = ["B", "A", "C"];
var deansList =[];
for(var i=0; i<grades.length; i++){
    deansList.push(grades[i] + " " + students[i]);
}
console.log(deansList);
// ['B Barry', 'A Mary', 'C Ann']



/*-------------------------------*/ (Purple Challenges:Arrays 10/10)
https://dev.getmimo.com/challenge?track=50&course=1716&chapter=11545&lesson=1
// Code an array that contains the names of chores that need to get done in order, "sweep", "mop", "laundry". 
// Access the chores in the chores array and use a reverse loop to add them to the priority array in reverse order.
var chores = ["sweep", "mop", "laundry"];
var priority = [];
for(var i = chores.length - 1; i >= 0; i--){
    priority.push(chores[i])
}
console.log(priority);
// [ 'laundry', 'mop', 'sweep' ] 