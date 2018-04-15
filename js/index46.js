// -- Program 46 --

// Definition section
let userNameAndPassword, userName, password;

// Body section
userNameAndPassword = "pepito2017,12345";

userNameLength = separatorPosition = userNameAndPassword.indexOf(",");

userName = userNameAndPassword.substr(0, userNameLength);

passwordStartPosition = separatorPosition + 1;

passwordEndPosition = userNameAndPassword.length - 1;

lastCharacterPosition = userNameAndPassword.length - 1;

passwordLength = lastCharacterPosition - separatorPosition;

password = userNameAndPassword.substr(passwordStartPosition, passwordLength);

templateMessage = `The user ${userName} has ${password} as password.`;

console.log("The whole string: " + userNameAndPassword);

console.log("String length: " + userNameAndPassword.length);

console.log("Separator position = String before separator length: " + separatorPosition);

console.log("User name: " + userName);

console.log("Last Character Position: " + lastCharacterPosition);

console.log("User password: " + password);

console.log(templateMessage);


// Output section