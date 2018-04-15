// -- Program 42 --

// Definition section
let message, secondMessage, thirdMessage, nextLineSymbol,
combinedMessage, combinedMessageLength, templateMessage;

// Body section
message = "Ready Player One is a 2011 science fiction novel, and the debut novel of American author Ernest Cline. The story, set in a dystopian 2044, follows protagonist Wade Watts on his search for an Easter egg in a worldwide virtual reality game, the discovery of which will lead him to inherit the game creator's fortune. Cline sold the rights to publish the novel in June 2010, in a bidding war to the Crown Publishing Group (a division of Random House)]. The book was published on August 16, 2011. An audiobook was released the same day; it was narrated by Wil Wheaton, who was mentioned briefly in one of the chapters.Ch. 20 In 2012, the book received an Alex Award from the Young Adult Library Services Association division of the American Library Association and won the 2012 Prometheus Award.";

secondMessage = "Ready Player One is a 2011 science fiction novel, and the debut novel of American author Ernest Cline.\nThe story, set in a dystopian 2044, follows protagonist Wade Watts on his search for an Easter egg in a worldwide virtual reality game, the discovery of which will lead him to inherit the game creator's fortune.";

thirdMessage = "Cline sold the rights to publish the novel in June 2010, in a bidding war to the Crown Publishing Group (a division of Random House)].\nThe book was published on August 16, 2011. An audiobook was released the same day; it was narrated by Wil Wheaton, who was mentioned briefly in one of the chapters.Ch. 20\nIn 2012, the book received an Alex Award from the Young Adult Library Services Association division of the American Library Association and won the 2012 Prometheus Award.";

nextLineSymbol = "\n";

combinedMessage = secondMessage.toUpperCase().concat(nextLineSymbol, thirdMessage.toLowerCase());

combinedMessageLength = combinedMessage.length;

templateMessage = `The message has ${combinedMessageLength} characters long`;

// Output section
console.log(message.toUpperCase());

console.log(message.toLowerCase());

console.log("---------------------");
console.log(secondMessage.toUpperCase());

console.log(thirdMessage.toLowerCase());

console.log("------------------------");

console.log(combinedMessage);

console.log(templateMessage);

