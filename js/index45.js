// -- Program 45 --

// Definition section
let playerName, teams, message;

// Definition section(functions)
let cutWord = function(generalString, searchWord){
	
	startPosition = generalString.indexOf(searchWord);
	endPosition = generalString.indexOf(searchWord) + searchWord.length;

	return generalString.slice(startPosition, endPosition);

};
// Body section
playerName = "Patrik Laine is lame";

teams = "New Jersey Devils, New York Rangers, Winnipeg jets & Pittsburgh Penguins";

message = "Winnipeg is the best Canadian city, Go Winnipeg!";

firstSearchWord = "Patrik Laine is";
secondSearchWord = "jets";
thirdSearchWord = "is the best";
fourthSearchWord = ", Go";

firstResult = cutWord(playerName, firstSearchWord);
secondResult = cutWord(teams, secondSearchWord);
thirdResult = cutWord(message, thirdSearchWord);
fourthResult = cutWord(message, fourthSearchWord);

// 1 way for Capitalizing
secondResult = secondResult.replace("j", "J");
// 2 way for Capitalizing
newString = "J".concat(secondResult.slice(1));

// Just cutting out the words that need to be in Upper Case
secondString = firstSearchWord.slice(0, firstSearchWord.length - 4);
console.log(secondString);
console.log("New String: " + newString);

// Cutting out words that need to be in Upper Case then UpperCasing them then displaying in template
templateMessage = `${firstResult.toUpperCase().slice(0, firstResult.length - 3)} ${thirdResult} ${secondResult} player${fourthResult} ${secondResult}!`;

/*
firstSearchWordLength = firstSearchWord.length;

startPosition = playerName.indexOf(firstSearchWord);

firstResult = playerName.slice(playerName.indexOf(firstSearchWord), playerName.indexOf(firstSearchWord) + firstSearchWord.length);

secondSearchWord = "jets";

startPosition = teams.indexOf(secondSearchWord);
endPosition = teams.indexOf(secondSearchWordSP) + secondSearchWord.length;



secondResult = teams.slice(secondSearchWordSP, secondSearchWordEP);
*/

console.log(firstResult);
console.log(templateMessage);
/*
console.log("This is the second result: " + secondResult);
console.log(secondSearchWord);
console.log(teams);
console.log(teams.indexOf("jets"));
console.log(secondSearchWord.length);
*/
// Output section