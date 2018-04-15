// -- Program 55 --

// Definition section
let firsNumber, secondNumber;

// Function definition


// Body section
firstNumber = 100;

secondNumber = 115;

firsConditionMessage = `Number ${firstNumber} is bigger than ${secondNumber}.`;

secondConditionMessage = `Number ${secondNumber} is bigger than ${firstNumber}.`;

//if(firstNumber > secondNumber) {
	
//	console.log(firsConditionMessage);

//} else {

//	console.log(secondConditionMessage);

//}

displayMessage = (firstNumber > secondNumber) ? firsConditionMessage : secondConditionMessage;

// Output section

console.log(displayMessage);