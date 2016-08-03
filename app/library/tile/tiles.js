'use strict';

// This should probably be tied to SQLlite and have images no squares :)

// TILE SIZES SHOULD NOT BE HARD-CODED HERE!!!!

class Tile {
  constructor(name, x, y, tilex, tiley, tileobj) {
    this.x = x;
    this.y = y;
    this.tilex = tilex;
    this.tiley = tiley;
    this.xPos = this.tilex * x;
    this.yPos = this.tiley * x;
    this.xPosEnd = (this.x + tilex) * this.tilex;
    this.yPosEnd = (this.y + tilex) * this.tiley;
    this.tileobj = tileobj;
    this.name = name;
    this.hasBeenDrawn = false;
    this.initSelect();
  }
  select(e) {
    var x = Math.floor((e.option.x / this.tilex)),
        y = Math.floor((e.option.y / this.tiley));
    if (this.x == x && this.y == y) {
      console.log("picked");
    }
  }

  initSelect() {
    this.selectEv = this.select.bind(this);
    $_.getEvent('MouseLeftDown', this.selectEv);
  }


  draw() {
    this.tile = $_.game.add.sprite(this.x * this.tilex, this.y * this.tiley, this.name);
    this.hasBeenDrawn = true;
  }

  getName() {
    return tileobj.Name;
  }
}
