// -- Program Company Users --

// Defining variables
let userCount, menCount, womenCount, displayUserCount;

// Defining functions
displayUserCount = function(userCount, userGender = "User"){

	userCountMessage = `${userGender} count ${userCount}`;	

	console.log(userCountMessage);

};

// Program body 
userCount = 100;

userCount += 5;

displayUserCount(userCount);

userCount -= 3;

displayUserCount(userCount);

userCount *= 2;

displayUserCount(userCount);

menCount = userCount * 0.5;

womenCount = userCount * 0.5;

displayUserCount(menCount, "Men");

displayUserCount(womenCount, "Women");
// Displaying output