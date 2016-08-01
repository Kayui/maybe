'use strict';

// This should probably be tied to SQLlite and have images no squares :)

// TILE SIZES SHOULD NOT BE HARD-CODED HERE!!!!

class Tile {
  constructor(x, y, tilex, tiley) {
    this.x = x;
    this.y = y;
    this.tilex = tilex;
    this.tiley = tiley;
  }

  draw() {
    this.tile = $_.game.add.graphics();
    this.tile.beginFill(this._getColor());
    this.tile.drawRect(this.x * this.tilex, this.y*this.tiley, 32, 32);
  }

  getName() {
    return this._getName == undefined ? "Undefined name" : this._getName();
  }
}

class GrassTile extends Tile {
  _getName() {
    return "Grass Tile"
  }

  _getColor() {
    // Cozy green yo
    return 0x5D7E62;
  }
}

class DirtTile extends Tile {
  _getName() {
    return "Dirt Tile"
  }

  _getColor() {
    // Cozy brown yo
    return 0xA68C69;
  }
}
