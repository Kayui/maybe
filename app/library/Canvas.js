'use strict';

// Game loop!
// Uses requestAnimationFrame behind the scenes keeping  
// timing inline with the devices refresh rate
function update() {
    menu();
    swirly1.swirl();
    swirly2.swirl();
}

// Set everything up for the first frame
function create() {
    // Registering any input keys, see Menu.js for use
    // arrow buttons
	cursors = game.input.keyboard.createCursorKeys();
    // wasd
    wasd = {
        up: game.input.keyboard.addKey(Phaser.Keyboard.W),
        left: game.input.keyboard.addKey(Phaser.Keyboard.A),
        down: game.input.keyboard.addKey(Phaser.Keyboard.S),
        right: game.input.keyboard.addKey(Phaser.Keyboard.D),
    };

    // Make your things! z-index is in order of creation.
    swirly1 = new Swirly("center", "center", 0.03, "swirly");
    swirly2 = new Swirly("center", "center", -0.02, "swirly");
    lommi = new Lommi("center", "center", "lommi");
}