// -- Program 35 --

// Defining variables
let clientId, inputClientId, correctByValue, correctByValueAndType, 
vtMessage, vMessage, displayMessage;

// Defining functions

// Program body
clientId = 143245;

inputClientId = "143245";

correctByValueAndType = (clientId === inputClientId);
correctByValue = (clientId == inputClientId);

vtMessage = `The inputClientId is correct by Value and Type: ${correctByValueAndType}`;
vMessage = `The inputClientId is correct by Value: ${correctByValue}`;

nextLineSybol = "\n";

displayMessage = vtMessage + nextLineSybol + vMessage;

// Displaying output
console.log("Program 35");
console.log(displayMessage);
