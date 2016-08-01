"use strict";

class WorldMap {
  constructor() {
    this.map = $_.game.add.tilemap();
    this.layer = this.map.create('World', 40, 30, 32, 32);
    this.layer.scrollFactorX = 0.5;
    this.layer.scrollFactorY = 0.5;
    console.log("World Map");
    var game = $_.game;
    var sprite = $_.game.add.sprite(0, 0, new GrassTile().getPix());
      this.map.fill(sprite, 0, 0, 32, 21);


  }
}
