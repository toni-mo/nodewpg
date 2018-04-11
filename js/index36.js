// -- Program 36 --

// Defining variables
let firstNumber, secondNumber;

// Program body
firstNumber = 10;

secondNumber = 20;

sameValue = firstNumber == secondNumber;

variablesMessage = `First Number = ${firstNumber}, Second Number = ${secondNumber}`;

haveMessage = `Both variables have the same value: ${sameValue}`;

dontHaveMessage = `Both variables do not have have same value: ${!sameValue}`;

nextLineSymbol = "\n";

displayMessage = variablesMessage + nextLineSymbol + haveMessage + nextLineSymbol + dontHaveMessage;

// Displaying output
console.log("Displaying Output using string templates");
console.log("----------------------------------------")
console.log(displayMessage);
//console.log(dontHaveMessage); 

//console.log("Both variables have the same value: " + sameValue);

//console.log("Both variables don't have the same value: " + !sameValue);
