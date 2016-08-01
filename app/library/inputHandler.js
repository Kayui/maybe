'use strict';
// Input handler
function inputHandler() {

	// Quit if desktop
	if (input.escape.isDown) {
		gui.App.quit();
	}
}
