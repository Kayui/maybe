"use strict";


// TMAP SIZE SHOULD NOT BE HARDCODED!!!!

class WorldMap {
  constructor() {
    this.map = [];
    // this.generate();
    // this.draw();
    console.log("Request map");
    $_.sendEvent('ClientReady');
    socket.on('connect',function(){
      socket.on('Map:New:WorldMap', function(data) {
        console.log("Got map");
        this.cleanmap();
        this.width = data.x;
        this.height = data.y;
        this.tile = {x: data.tiles.x, y: data.tiles.y};
        this.tiles = data.tiles;
        this.neededTiles = data.tilesconfig;
        document.addEventListener("mousewheel", this.wheel, false);
        document.addEventListener("DOMMouseScroll", this.wheel, false);

        $_.game.world.setBounds(0, 0, $_.map.width*$_.map.tile.x, $_.map.height*$_.map.tile.y);

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
  wheel(ev) {
      console.log("WHEEL");
      console.log(ev);
    	if (ev.deltaY > 0) {
        var a = 0.5;
      }
      else if(ev.deltaY < 0) {
        var a = 2;
      }
      else {
        return;
      }
      $_.map.tile.y = $_.map.tile.y * a;
      $_.map.tile.x = $_.map.tile.x * a;
      for (let z in $_.map.map) {
        for (let x in $_.map.map[z]) {
          $_.map.map[z][x].tilex = $_.map.map[z][x].tilex * a;
          $_.map.map[z][x].tiley = $_.map.map[z][x].tiley * a;
        }
      }
      $_.map.cleanmap();
      $_.map.draw();
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
