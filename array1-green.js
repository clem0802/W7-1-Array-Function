//  https://dev.getmimo.com/dashboard?week=5  (SRPINT 5)
ARRAYS: "indices" are numbered positions of elements in arrays
/*-------------------------------*/
=>  .PUSH()
// to add a value (在最後面)

var toDo = ["call mom", "dishes"];
toDo.push("groceries");
console.log(toDo);
// ['call mom', 'dishes', 'groceries']


/*-------------------------------*/
=>  .POP()
// to remove a value (在最後面)
var isaac = ["music", "drawing", "sleeping", "eating", "Webtoon", "minecraft"];
isaac.pop();
console.log(isaac);
// ['music', 'drawing', 'sleeping', 'eating', 'Webtoon']

var isaac = ["music", "drawing", "sleeping", "eating", "Webtoon", "minecraft"];
var newIsaac = isaac.pop();
console.log(newIsaac);
// minecraft
// the newIsaac variable stores the value we have removed !!!!!


/*-------------------------------*/
/*-------------------------------*/
=>  .LENGTH
var tasks = ["dishes", "windows", "vacuum"];
console.log(tasks.length);
// 3

// we can also store the array length in a variable
var tasks = ["dishes", "windows", "vacuum"];
var length = tasks.length;
console.log(length);
//3

var tasks = [];
console.log(tasks.length);
// 0

var tasks = ["dishes", "windows", "vacuum"];
if (tasks.length > 0) {
 console.log("Ugh, more work!");
}
// Ugh, more work!


var friends = ["Ana", "Eve", "Sam"];
for (var i = 0; i < 3; i++) {
 console.log(i);
}
// 0
// 1
// 2
// => "i<3" can also be written as "i<friends.length"


var friends = ["Anna", "Tim", "Eve"];
for (var i = 0; i < friends.length; i++) {
 console.log(friends[i]);
}
// Anna
// Tim
// Eve

