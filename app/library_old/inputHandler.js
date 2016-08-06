'use strict';

function Keys() {
	this.escape = $_.game.input.keyboard.addKey(Phaser.Keyboard.ESC);
}

// Input handler
class InputHandler {
	constructor() {
		this.keys = new Keys();
		this.cursors = $_.game.input.keyboard.createCursorKeys();
		this.wasd = {
			up: $_.game.input.keyboard.addKey(Phaser.Keyboard.W),
			left: $_.game.input.keyboard.addKey(Phaser.Keyboard.A),
			down: $_.game.input.keyboard.addKey(Phaser.Keyboard.S),
			right: $_.game.input.keyboard.addKey(Phaser.Keyboard.D),
		};

		$_.game.input.mouse.onMouseDown = function (ev) {
			var options = {};
			options.x = ev.clientX;
			options.y = ev.clientY;
			$_.sendEvent('MouseLeftDown', options);
		}
	}
	update() {
		if (this.keys.escape.isDown) $_.sendEvent('KeyPressedEscape');
		if (this.cursors.up.isDown || this.wasd.up.isDown) $_.sendEvent('KeyPressedUp');
		if (this.cursors.down.isDown || this.wasd.down.isDown) $_.sendEvent('KeyPressedDown');
		if (this.cursors.left.isDown || this.wasd.left.isDown) $_.sendEvent('KeyPressedLeft');
		if (this.cursors.right.isDown || this.wasd.right.isDown) $_.sendEvent('KeyPressedRight');
	}
}
