// -- Program 56 --

// Definition section
let number;

// Function definition


// Body section
number = 42;

remainer = number % 2;

evenMessage = `${number} is even number`;

oddMessage = `The ${number} is odd number`;

//function condition(number){
//	return (number % 2 == 0) ? true : false;

//	displayMessage = (number % 2 == 0) ? evenMessage : oddMessage;

//	console.log(displayMessage);
//}

//evenCondition = number % 2;

//displayMessage = (condition(number)) ? evenMessage : oddMessage;

//condition();

displayMessage = (remainer == 0) ? evenMessage : oddMessage;

displayMessage = (number % 2 == 0) ? evenMessage : oddMessage;

console.log(displayMessage);

//if(number % 2 == 0){
//	console.log(evenMessage);
//} else {
//	console.log(oddMessage);
//};

//console.log("Remainder from modulus % operation: " + remainer);

// Output section