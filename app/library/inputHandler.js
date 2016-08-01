'use strict';


var events = new function() {
	this.escape = new CustomEvent('KeyPressedEscape', {});
}

// Input handler
class InputHandler {
	constructor() {
		this.key = {};
		this.event = {};
		this.key.escape = $_.game.input.keyboard.addKey(Phaser.Keyboard.ESC);
		document.addEventListener('KeyPressedEscape', function (e) {
			console.log("what the fuck! you pressed escape?");
		}, false);
	}
	update() {
		if (this.key.escape.isDown) {
			document.dispatchEvent(events.escape);
		}
	}
}
