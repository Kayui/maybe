'use strict';

// Input mapping
var cursors, wasd, escape;

// The game object set to 99% vw and 98% vh, 
// Phaser.Auto tries webgl or canvas rendering modes
var lommi;
var swirly1;
var swirly2;

var game = new Phaser.Game("99%", "98%", Phaser.AUTO, 'game', {
    preload: assetLoader,
    create: create,
    update: update
});

// Use this thing to load any assets requried
// the first parameter is used as an identifier when setting sprites and such
function assetLoader() {
    game.load.image('swirly', 'assets/swirly.png');
    game.load.image('lommi', 'assets/lommi.png');
}

