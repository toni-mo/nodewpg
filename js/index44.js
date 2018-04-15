// -- Program 44 --

// Definition section
let text, result, characterPosition, endPosition, templateMessage;

let changeCharacters = function(){

}

// Body section
text = "HELLO";

result = "";

endPosition = text.length - 1;

characterPosition = endPosition;
result = result.concat(text.charAt(characterPosition));
characterPosition--;
result = result.concat(text.charAt(characterPosition));
characterPosition--;
result = result.concat(text.charAt(characterPosition));
characterPosition--;
result = result.concat(text.charAt(characterPosition));
characterPosition--;
result = result.concat(text.charAt(characterPosition));

result = result.toLowerCase();

templateMessage = `the final result is ${result}`;



//result = result.concat(text.charAt(4), text.charAt(3), text.charAt(2), text.charAt(1), text.charAt(0));

// Here String transforms into array, then array elements are reverted, in the end array is transformed back to string.
//result = text.split("").reverse().join("").toLowerCase();



// Output section
console.log(result);

console.log(templateMessage);