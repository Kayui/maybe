'use strict';

// This should probably be tied to SQLlite and have images no squares :)

// TILE SIZES SHOULD NOT BE HARD-CODED HERE!!!!

class Tile {
  constructor(name, x, y, tilex, tiley, tileobj) {
    this.x = x;
    this.y = y;
    this.tilex = tilex;
    this.tiley = tiley;
    this.tileobj = tileobj;
    this.name = name;
  }

  draw() {
    this.tile = $_.game.add.sprite(this.x * this.tilex, this.y * this.tiley, this.name);
  }

  getName() {
    return tileobj.Name;
  }
}
