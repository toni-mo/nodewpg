// -- Program 57 --

// Definition section
let username, password, displayMessage;

// Function definition
let checkCredentials = function(login, password){
	
	// Definition section
	let systemUserLogin = "pepe2017";
	
	let systemUserPassword = 12345;
	
	let loginSuccessMessage = `Logged in user, show user home page.`;

	//let loginErrorMessage = `The login or password information is not correct. Please check your info and enter it again.`;

	let loginErrorMessage = `Sorry, there has been a problem, please try it again.`;
	
	// Body section
	if(login == systemUserLogin && password == systemUserPassword){
		console.log(loginSuccessMessage);
	} else {
		console.log(loginErrorMessage);
	}

	displayMessage = (login == systemUserLogin && password == systemUserPassword) ? loginSuccessMessage : loginErrorMessage;

	if(displayMessage)
		console.log(displayMessage);


};

// Body section
username = "pepe2017";

password = 12345;

checkCredentials(username, password);

// Output section