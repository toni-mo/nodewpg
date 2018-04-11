// -- Program 38 --

// Definition section
let firstName;

// Definition section(functions)
let checkLength = function(word){
	
	return {
		value: word,
		length: word.length
	};
};

let displayWordInfo = function(wordObject){

	templateMessage = `Your word is: ${wordObject.value}, and its length is: ${wordObject.length}`;
	console.log(templateMessage);
};

// Body section
firstName = "Javscript";

// Output section
displayWordInfo(checkLength(firstName));