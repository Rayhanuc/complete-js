/************************** 
Array of JavaScripts	
***************************/

// Initialize new array
var names = ['John', 'Mark', 'Jane', 'Kamal', 'Rohim', 'Joshi'];
var years = new Array(1990, 1969, 1948, 1964, 1953, 1862);

console.log('Full array names:'+names);
console.log('First name of array is :' + names[0]);
console.log(names.length);

// Mutate array data
names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);

// Different data types
var john = ['John', 'Smith', 1990, 'teacher', false];

// Add an element in array last
john.push('blue');
// Add an element in Array first
john.unshift('Mr.');
console.log(john);
// Remove last element from array
john.pop();
john.pop();

// Remove Fist element from array
john.shift();
console.log(john);

// See position of element in array
console.log(john.indexOf(1990));

// Wrong element position looking in array
console.log(john.indexOf(253));


var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
console.log(isDesigner);