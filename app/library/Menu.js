'use strict';
// Input handler
function menu() {
	if (cursors.up.isDown || wasd.up.isDown) {
		lommi.moveUp();
	}
	else if (cursors.down.isDown || wasd.down.isDown) {
		lommi.moveDown();
	}

	if (cursors.left.isDown || wasd.left.isDown) {
		lommi.moveLeft();
	}
	else if (cursors.right.isDown || wasd.right.isDown) {
		lommi.moveRight();
	}
}
