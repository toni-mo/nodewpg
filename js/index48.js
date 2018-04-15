// -- Program 48 --

// Definition section
let message, pi, answerToLife, result;

// Function definition
message = "3.14 it's a greate number but 42 it's answer to life.";

console.log("Our input message is: " + message);

pi = parseFloat(message.substr(0, 4));

console.log("PI = " + pi + " typeof pi = " + typeof pi);

answerToLife = parseInt(message.substr(message.indexOf("42"), 2));

console.log("answerToLife = " + answerToLife + " typeof answerToLife = " + typeof answerToLife);

result = pi + answerToLife;

console.log("result = " + result + " typeof result = " + typeof result);

result = result.toString();

console.log("result = " + result + " typeof result = " + typeof result);

resultString = result + " is the result of adding pi and answerToLife.";

console.log(resultString);

// Body section


// Output section