/************************** 
Objects and Methods
***************************/


var john = {
	firstName: 'John',
	lastName: 'Smith',
	birthYear: 1992,
	family: ['Jane','Mark','Bob', 'Emily'],
	job: 'teacher',
	isMarried: false,
	calcAge: function() {
		// return 2020 - this.birthYear;
		this.age =  2020 - this.birthYear;
	}
}

// console.log(john.calcAge());
var age = john.calcAge();
// john.age = age;
// john.age = john.calcAge();
john.calcAge();
console.log(john);