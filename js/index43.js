// -- Program 43 --

// Definition section
let text, firstChar, secondChar, thirdChar, 
result, templateMessage;

// Body section
text = "game of thrones";

firstChar = text.charAt(0);

secondChar = text.charAt(5);

thirdChar = text.charAt(8);

result = firstChar.concat(secondChar, thirdChar);

result = result.toUpperCase();

templateMessage = `The final result is: ${result}`;

// Output section
console.log(result);