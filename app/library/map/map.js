"use strict";


// TMAP SIZE SHOULD NOT BE HARDCODED!!!!

class WorldMap {
  constructor() {
    this.map = [];
    // this.generate();
    // this.draw();
    socket.on('Map:New:WorldMap', function(data) {
      this.width = data.x;
      this.height = data.y;
      this.tile = {x: data.tiles.x, y: data.tiles.y};
      this.tiles = data.tiles;
      this.generate();
      this.draw();
      $_.sendEvent('MapReady');
    }.bind(this));
  }
  generate() {
        // Generate a map full of grass
        for (var x in this.tiles) {
          if (x.indexOf('tile') == 0 )
          {
            var tile = this.tiles[x];
            var _x = tile.x;
            var _y = tile.y;
            var _z = tile.z;
            if (this.map[_z] === undefined) this.map[_z] =[];
            this.map[_z][x] = new GrassTile(_x,_y,this.tile.x, this.tile.y);
          }
        }
  }
  draw() {
    // Draw all the things!
    for (let z in this.map) {
      for (let x in this.map[z]) {
        this.map[z][x].draw();
      }
    }
  }

}
