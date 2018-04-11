// -- Program 37 --

// Definition section
let average, studentAverage, pointsDifference;

// Body section
average = 6;

studentAverage = 4;

pass = studentAverage >= average;

pointsDifference = average - studentAverage;

entryDataMessage = `Average = ${average}; Student Average = ${studentAverage};`;
passMessage = `This student has a greater or equal average required to pass: ${pass}.`;
missingPointsMessage = `He is missing ${pointsDifference} points.`;
nextLineSymbol = "\n";

displayMessage =entryDataMessage + nextLineSymbol + passMessage + nextLineSymbol + missingPointsMessage;

// Output section
console.log(displayMessage);