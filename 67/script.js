// Lecture: 67. Immediately Invoked Function Expressions (IIFE)

/*function gage() {
	var score = Math.random() * 10;
	console.log(score >= 5);
}
game();*/

( function (){
	var score = Math.random() * 10;
	console.log(score >= 5);
})();

// console.log(score);

( function (goodLuck){
	var score = Math.random() * 10;
	console.log(score >= 5 - goodLuck);
})(5);


