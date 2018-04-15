// -- Program 58 --

// Definition section
let hour, morningMessage, afternoonMessage, 
eveningMessage, nightMessage, displayMessage;

// Function definition


// Body section
hour = 23;

morningMessage = "Good morning!";

afternoonMessage = "Good afternoon!";

eveningMessage = "Good evening!";

nightMessage = "Good night!";

if(hour > 5 && hour < 12){
	
	displayMessage = morningMessage;

} else if (hour > 12 && hour < 18){

	displayMessage = afternoonMessage;

} else if (hour > 18 && hour < 22){

	displayMessage = eveningMessage;

} else if (hour > 22 || hour < 5){

	displayMessage = nightMessage;

}

console.log("Hour is: " + hour);
console.log(displayMessage);

// Output section

