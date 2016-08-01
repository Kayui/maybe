'use strict';

function Keys() {
	this.escape = $_.game.input.keyboard.addKey(Phaser.Keyboard.ESC);
}

// Input handler
class InputHandler {
	constructor() {
		this.keys = new Keys();
		$_.game.input.mouse.onMouseDown = function (ev) {
			var options = {};
			options.x = ev.clientX;
			options.y = ev.clientY;
			$_.sendEvent('MouseLeftDown', options);
		}
	}
	update() {
		if (this.keys.escape.isDown) $_.sendEvent('KeyPressedEscape');
	}
}
