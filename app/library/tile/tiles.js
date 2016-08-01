'use strict';

// This should probably be tied to SQLlite and have images no squares :)

// TILE SIZES SHOULD NOT BE HARD-CODED HERE!!!!

class Tile {
  constructor() {

  }
  defaultSquare() {
    var img  = $_.game.add.bitmapData(32,32);
    img.ctx.beginPath();
    img.ctx.rect(0,0,128,128);
    img.ctx.fillStyle = 'green';
    img.ctx.fill();
    return img;
  }
  getPix() {
    return this.pix == undefined ? this.defaultSquare() : this.pix();
  }
  getName() {
    return this._getName == undefined ? "Undefined name" : this._getName();
  }
}

class GrassTile extends Tile {
  _getName() {
    return "Grass Tile DEMO"
  }
}
