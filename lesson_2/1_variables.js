// Comment

/*
Multi line
Comment
*/


// variable (DON'T EVER USE var!!)
var firstName = 'Ben'; // string
// you can RE-ASSIGN variables
firstName = 'Billy';

var age = 41; // number
var isOlderThan40 = age > 40; // boolean (true or false)

// Use these: const: Constant, let: Can be reassigned
const unchangeableName = 'can NEVER be reassigned1';
// unchangeableName = 'Billy'; Throws TypeError: Assignment to constant variable. 

let changeableName = 'Freddy';

changeableName = 'Billy';
console.log(changeableName); // Billy

// console.log logs stuff to your terminal / command line
console.log(age);
console.log(isOlderThan40);


