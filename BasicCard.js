//dependency
var fs = require("fs");

function BasicFlashcard(front, back) {
	this.front = front;
	this.back = back;
	this.save = function() {
		//write it in flashcards.txt
		fs.appendFile("flashcards.txt", "{front: " + front + ", back: " + back + "}, ", function(err) {
			if (err) console.log(err);
		});
	};
};

module.exports = BasicFlashcard;