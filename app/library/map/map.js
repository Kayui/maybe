"use strict";


// TMAP SIZE SHOULD NOT BE HARDCODED!!!!

class WorldMap {
  constructor() {
    this.map = [];
    // this.generate();
    // this.draw();
    console.log("Request map");
    socket.on('connect',function(){
      console.log("Sendi request");
      socket.emit('Map:Get:WorldMap', {data: 'hey' });
      socket.on('Map:New:WorldMap', function(data) {
        console.log("Got map");
        this.cleanmap();
        this.width = data.x;
        this.height = data.y;
        this.tile = {x: data.tiles.x, y: data.tiles.y};
        this.tiles = data.tiles;
        this.neededTiles = data.tilesconfig;

        $_.minimap = new Minimap();

        // Þetta preppar loading
        for (let i in this.neededTiles) {
          $_.game.load.image(i, 'assets/' + i + '.png');
        }

        // Þessi lína sparkar öllu í gang
        $_.game.load.start();

        // Wait for game to load and the draw the game
        $_.watchObject("game.load.hasLoaded",function(){
          this.generate();
          this.draw();
          $_.sendEvent('MapReady');
        }.bind(this), {param: true});
      }.bind(this));
    }.bind(this));

  }
  cleanmap() {
    $_.clear();
  }
  generate() {
        // Generate a map full of grass
        for (var x in this.tiles) {
          if (x.indexOf('tile') === 0 )
          {
            var tile = this.tiles[x];
            var _x = tile.x;
            var _y = tile.y;
            var _z = tile.z;
            var name = tile.type;
            if (this.map[_z] === undefined) this.map[_z] =[];
            this.map[_z][x] = new Tile(name, _x,_y,this.tile.x, this.tile.y, this.neededTiles[name]);
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
