// -- Program 59 --

// Definition section
let firstNumber, secondNumber, firstBiggerMessage, 
secondBiggerMessage, numbersEqualMessage;

// Function definition


// Body section
firstNumber = 57;

secondNumber = 57;

firstBiggerMessage = `${firstNumber} is bigger than ${secondNumber}.`;

secondBiggerMessage = `${secondNumber} is bigger than ${firstNumber}.`;

numbersEqualMessage = `They are the same number`;

displayNumbersMessage = `First number: ${firstNumber}; Second number: ${secondNumber}.`;

console.log(displayNumbersMessage);

if(firstNumber == secondNumber){

	console.log(numbersEqualMessage);

} else if (firstNumber > secondNumber){

	console.log(firstBiggerMessage);

} else if (secondNumber > firstNumber) {

	console.log(secondBiggerMessage);

}

// Output section

