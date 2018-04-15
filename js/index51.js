// -- Program 51 --

// Definition section
let username, password;

// Function definition
let checkCredentials = function(login, password){
	
	// Definition section
	let systemUserLogin = "pepe2017";
	
	let systemUserPassword = 12345;
	
	let loginSuccessMessage = `Logged in user, show user home page.`;

	let loginErrorMessage = `The login or password information is not correct. Please check your info and enter it again.`;
	
	// Body section
	if(login == systemUserLogin && password == systemUserPassword){
		console.log(loginSuccessMessage);
	} else {
		console.log(loginErrorMessage);
	}

};

// Body section
username = "pepes2017";

password = 12345;

checkCredentials(username, password);

// Output section