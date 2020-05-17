/************************** 
Variable and data types
***************************/
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

// Variable naming rules
var _3years = 3;
var johnMark = 'John and Mark';
// var if = 23;


/************************** 
Variable mutation and type coercion
***************************/

var firstName2 = 'John';
var age2 = 28;

console.log(firstName2 + ' ' + age2);

var job, isMarried;
job = 'Teacher';
isMarried = false;

console.log(firstName2 + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// Variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName2 + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last Name?');
console.log(firstName + ' ' + lastName);