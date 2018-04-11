// Program 39

// Definition section
let firstName, lastName;

// Body section
firstName = "Anton";

lastName = "Shevchuk";

charDifference = (firstName.length > lastName.length) ? firstName.length - lastName.length : lastName.length - firstName.length;

firstNameIsLonger = firstName.length > lastName.length;

firstNameLengthMessage = `My First Name is ${firstName} and it has ${firstName.length} characters`;

lastNameLengthMessage = `My Last Name is ${lastName} and it has ${lastName.length} characters`;

differenceMessage = `The character difference between first name and last name is: ${charDifference}`;

comparisonMessage = `My first name is longer than my last name: ${firstNameIsLonger}`;

nextLineSymbol = "\n";

wholeMessage = firstNameLengthMessage + nextLineSymbol + lastNameLengthMessage + nextLineSymbol + 
			   differenceMessage + nextLineSymbol + comparisonMessage;

// Output section
console.log(wholeMessage);