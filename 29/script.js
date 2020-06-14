/************************** 
Loops and Iteration
***************************/

for (var i = 1; i < 20; i += 2){
    console.log(i);
}

// var john = ['John', 'Smith', 1990, 'designer',false,'blue'];

/* console.log(john[0]);
console.log(john[1]);
console.log(john[2]);
console.log(john[3]);
console.log(john[4]); */

/* for(var i = 0; i < john.length; i++){
    console.log(john[i]);
}


while(i<john.length) {
    console.log(john[i]);
    i++;
} */


var john = ['John', 'Smith', 1990, 'designer',false,'blue'];


for(var i = 0; i < john.length; i++){
    if(typeof john[i] !== 'string') continue;
    console.log(john[i]);
}

for(var i = 0; i < john.length; i++){
    if(typeof john[i] !== 'string') break;
    console.log(john[i]);
}


// Looping backwards

for(var i = john.length - 1; i >= 0; i--) {
    console.log(john[i]);
}
