
// This is place to play with code;

let stdin = process.openStdin();

stdin.addListener("data", function(d){
	console.log("you entered:" + d.toString());
});

let funcOne = function(){
	
	let valueOne = "value from funcOne()";
	
	console.log(valueOne);
}



let funcTwo = function(){
	
	let valueTwo = "value from funcTwo();";

	funcOne();
};

funcTwo();