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
    let x_adjusted = e.option.x + $_.game.camera.x;
    let y_adjusted = e.option.y + $_.game.camera.y;
    let x = Math.floor((x_adjusted / this.tilex)),
      y = Math.floor((y_adjusted / this.tiley));
    if (this.x == x && this.y == y) {
      //      console.log("picked");
      console.log("You just clicked a " + this.getName() + " tile");
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
  remove() {
    this.tile.kill();
    this.tile.destroy();
  }

  drawMiniMap() {

  }


  getName() {
    return this.name;
  }
}
