/*-------------------------------*/ Soccer Team
https://dev.getmimo.com/project?track=50&course=1742&chapter=11613&lesson=9

var goalies = ["Sam"];
console.log("Goalies: " + goalies);
var defenders = ["Lisa", "Tom", "Jenny", "Jo"];
console.log("Defenders: " + defenders);
var midfielders = ["Jim", "Kai", "Ian", "Ava"];
console.log("Midfielders: " + midfielders);
var forwards = ["Kim", "Lucas"];
console.log("Forwards: " + forwards);



/*-------------------------------*/ Shopping Cart
https://dev.getmimo.com/dashboard?week=5
// 1) Start by creating a variable named cart and setting it to an empty array. 
// 1) It'll hold the wish list items the user wants to purchase.
// 2) To store the first item we'll remove from wishlist, create the variable item1.

var book = 40;
var gardeningTools = 30;
var headphones = 50;
var mat = 25;

var wishlist = [book, gardeningTools, headphones, mat];
var cart = []; // step 1)
var item1 = wishlist.pop(); // step 2) mat removed
var item2 = wishlist.pop(); // headphones removed
cart.push(item1, item2); // add item1 and item2 to the cart array
console.log("Cart prices: ");
console.log(cart);

var total = item1 + item2;
console.log("Total: " + total);
// Cart prices: 
// [ 25, 50 ]
// Total: 75