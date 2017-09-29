var fs = require("fs");
var inquirer = require("inquirer");
var command = process.argv[2];
var BasicFlashcard = require("./BasicCard.js");
var ClozeFlashcard = require("./ClozeCard.js");

createCard();

function createCard() {
	if (command === "basic") {
		inquirer.prompt([{
			name: "front",
			message: "type what you would like on the front of the card."
		}, {
			name: "back",
			message: "type what you would like on the back of the card."
		}]).then(function(answers) {
			var basicFlashCard = new BasicFlashcard(answers.front, answers.back);
			basicFlashCard.save();
		});
	} else if (command === "cloze") {
		inquirer.prompt([{
			name: "text",
			message: "Enter full text."
		}, {
			name: "cloze",
			message: "Enter cloze argument."
		}]).then(function(answers) {
			var search = answers.text.search(answers.cloze);
			var substring = answers.text.substring(0, search) + "_________" + answers.text.substring(search + answers.cloze.length);
			var clozeFlashCard = new ClozeFlashcard(substring, answers.cloze);
			clozeFlashCard.save();
		});
	} else if (command === "show") {
		showAllCards();
	} else {
		console.log("Please input command 'basic' or 'cloze' to create a flashcard, or 'show' to see all flashcards.");
	}
}

//

//
function showAllCards() {
	fs.readFile("flashcards.txt", "utf8", function(error, data) {
		if (error) console.log(error);
		console.log("[" + data + "]");
	})
}