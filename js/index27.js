// Defining variables
let firstNumber, secondNumber, operationResult, addResult, substractResult, 
multiplyResult, divisionResult, remainderResult;

firstNumber = 2;

secondNumber = 16;

addResult = firstNumber + secondNumber;
substractResult = firstNumber - secondNumber;
multiplyResult = firstNumber * secondNumber;
divisionResult = firstNumber / secondNumber;
remainderResult = firstNumber % secondNumber;
	
addMessage = `I add ${firstNumber} and ${secondNumber} and the result is ${addResult}`;

substractMessage = `I substract ${firstNumber} and ${secondNumber} and the result is ${substractResult}`;

multiplyMessage = `I multiply ${firstNumber} and ${secondNumber} and the result is ${multiplyResult}`;

divisionMessage = `I divide ${firstNumber} and ${secondNumber} and the result is ${divisionResult}`;

remainderMessage = `I find the remainder from division of ${firstNumber} and ${secondNumber} and the result is ${remainderResult}`;

// Displaying output
console.log(addMessage);
console.log(substractMessage);
console.log(multiplyMessage);
console.log(divisionMessage);
console.log(remainderMessage);