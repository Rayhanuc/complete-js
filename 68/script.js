// Lecture: 68. Closures

function retirement(retirementAge) {
	var a = ' years left until retirement.';
	return function(yearOfBirth){
		var age = 2016 - yearOfBirth;
		console.log((retirementAge - age) + a);
	}
}

var retirementUS = retirement(66); // retirement(retirementAge)
retirementUS(1990);

var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementGermany(1990);
retirementUS(1990);
retirementIceland(1990);



// retirement(66)(1990); // retirement(retirementAge)(yearOfBirth);

/*function interviewQustion(job) {
	if (job === 'designer') {
		return function(name) {
			console.log(name + ', can you please explain what UX design is?');
		}
	}else if (job === 'teacher') {
		return function(name) {
			console.log('What subject do you teach, ' + name + '?');
		}
	}else {
		return function(name) {
			console.log('Hello ' + name + ', what do you do?');
		}
	}
}*/


function interviewQustion(job) {
	return function(name){
		if (job === 'designer') {
			console.log(name + ', can you please explain what UX design is?');
		} else if (job === 'teacher') {
			console.log('What subject do you teach, ' + name + '?');
		} else {
			console.log('Hello ' + name + ', what do you do?');
		}
	}
}

interviewQustion('teacher') ('John');

