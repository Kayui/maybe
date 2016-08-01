'use strict';

function Keys() {
	this.escape = $_.game.input.keyboard.addKey(Phaser.Keyboard.ESC);
}


// Input handler
class InputHandler {
	update() {
		if ($_.keys.escape.isDown) $_.sendEvent('KeyPressedEscape');
	}
}
