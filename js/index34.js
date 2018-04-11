// -- Program 34 --

// Defining variables
let income, revenue, taxes, incomeObjective, 
taxesObjective, bonusObjective, templateMessage, displayOutput;

// Defining functions
displayOutput = function(message){

	console.log(message);

}

// Program body
income = 1000;

revenue = 600;

taxes = 500;



if (income >= 800)
	incomeObjective = true;
else
	incomeObjective = false;

if(taxes < 400)
	taxesObjective = true;
else
	taxesObjective = false;

if(revenue == 600)
	bonusObjective = true;
else 
	bonusObjective = false;

templateMessage = `Income Objective: ${incomeObjective}
Taxes Objective: ${taxesObjective}
Bonus Objective: ${bonusObjective}`;

// Displaying output
displayOutput(templateMessage);