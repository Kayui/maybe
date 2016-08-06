"use strict";

class WorldMap {
  constructor() {

    this.map = [];
    this.textures = [];
    // Announcing 
    $_.sendEvent('ClientReady');

    socket.on('connect', function () {
      socket.emit('Map:Get:WorldMap', {
        data: 'hey'
      });

      socket.on('Map:New:WorldMap', function (data) {
        console.log(data);
      });
    });
  }


  generate() {
    // Generate a map full of grass
    for (var x in this.tiles) {
      if (x.indexOf('tile') === 0) {
        var tile = this.tiles[x];
        var _x = tile.x;
        var _y = tile.y;
        var _z = tile.z;
        var name = tile.type;
        if (this.map[_z] === undefined) this.map[_z] = [];
        this.map[_z][x] = new Tile(name, _x, _y, this.tile.x, this.tile.y, this.neededTiles[name]);
      }
    }
  }
  draw() {
    // Draw all the things!
    $_.game.world.removeAll();
    for (let z in this.map) {
      for (let x in this.map[z]) {
        this.map[z][x].draw();
      }
    }
  }

}
