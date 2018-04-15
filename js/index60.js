// -- Program 60 --

// Definition section
let grade, amazingMessage, goodMessage, wtfMessage;

// Function definition


// Body section
nextLineSymbol = "\n";

amazingMessage = "Great Work!";

goodMessage = "You've done it!";

wtfMessage = "Wtf were you doing whole this time?!" + nextLineSymbol + "You need to do all the exercises again, pease try again!";

grade = 100;

console.log("Your grade is: " + grade);

if(grade >= 9){

	console.log(amazingMessage);

} else if (grade >= 6 && grade < 9){

	console.log(goodMessage);

}else{

	console.log(wtfMessage);

}

// Output section

