
let defineVariables = function(){
	let seriesName, dragon1, dragon2, dragon3, templateMessage;
}

let assignVariables = function(){
	seriesName = "Game of Thrones";

	

	dragon1 = "Drogon";

	dragon2 = "Rhaegal";

	dragon3 = "Viserion";

	templateMessage = `In ${seriesName} dragons names are: ${dragon1}, ${dragon2}, ${dragon3}.`;
}

let displayOutput = function(){

	console.log(templateMessage);
}

let GameOfThrones = {
	
	displayMessage: function(){
		defineVariables();

		assignVariables();

		displayOutput();	
	}
	
};

GameOfThrones.displayMessage();


/* 


let GameOfThrones = {
	
	this.seriesName: "Game Of Thrones",
	
	dragon1: "Drogon",
	
	dragon2: "Rhaegal",
	
	dragon3: "Viserion",
	
	templateMessage: `In ${this.seriesName} dragons names are: ${this.dragon1}, ${this.dragon2}, ${this.dragon3}`,
	
	displayMessage: function(){
		console.log(this.templateMessage);
	}
}

GameOfThrones.displayMessage();

*/
