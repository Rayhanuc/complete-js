/************************** 
Operator Precedence
***************************/

var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

// Multiple operators
var isFullAge = now - yearJohn >= fullAge; // true
console.log(isFullAge);

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26

console.log(x, y);

// More operators

// x = x * 2; // both are same

x *= 2;
console.log(x);

var a = 12;
a *= 3;
console.log(a);

x += 10;
console.log(x);
