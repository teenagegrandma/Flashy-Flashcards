//dependency
var fs = require("fs");

function ClozeFlashcard(text, cloze) {
	this.text = text;
	this.cloze = cloze;
	this.save = function() {
		//write it in flashcards.txt
		fs.appendFile("flashcards.txt", "{front: " + text + ", back: " + cloze + "}, ", function(err) {
			if (err) console.log(err);
		});
	};
};


module.exports = ClozeFlashcard;