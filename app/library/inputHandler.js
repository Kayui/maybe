'use strict';

function Keys() {
	this.escape = $_.game.input.keyboard.addKey(Phaser.Keyboard.ESC);
}

// Input handler
class InputHandler {
	constructor() {
		this.keys = new Keys();
	}
	update() {
		if (this.keys.escape.isDown) $_.sendEvent('KeyPressedEscape');
	}
}
