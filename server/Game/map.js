"use strict"

/*
  Generation idea:
  - = empty tile
  X = house tile
  Ö = road  tile
  G = grass tile
  D = rock  tile

  Pass Zero: Empty
  - - - - - - - - - -
  - - - - - - - - - -
  - - - - - - - - - -
  - - - - - - - - - -
  - - - - - - - - - -
  - - - - - - - - - -
  - - - - - - - - - -
  - - - - - - - - - -

  Pass One: 4x4 houses placed on two random places
  - - - - - - - - - -
  - X X - - - - - - -
  - X X - - - - - - -
  - - - - - - - - - -
  - - - - - - - - - -
  - - - - - - - X X -
  - - - - - - - X X -
  - - - - - - - - - -

  Pass Two: a road between house A and house B is randomly generated
  - - - - - - - - - -
  - X X - - Ö Ö Ö Ö -
  - X X Ö Ö Ö - - Ö -
  - - - - - - - - Ö -
  - - - - - - - - Ö -
  - - - - - - - X X -
  - - - - - - - X X -
  - - - - - - - - - -

  Pass Three: grass and rocks is randomly placed instead of empty tiles
  D D D G G D G D D G
  D X X D D Ö Ö Ö Ö G
  D X X Ö Ö Ö D D Ö G
  D G D G D G D G Ö G
  D G D G G D G D Ö D
  G D G G D G D X X D
  G D G G D D D X X G
  G D G G D G D G G D

  Result: two points of interest which can be freely moved between with randomly generated terrain
*/


module.exports = {
  Generator: class MapGenerator {
    constructor() {
      this.width = 60;
      this.height = 45;
      var _tiles =  require('./tiles')
      this.tiles = new _tiles.List();

      return this.mapObject();
    }
    mapObject() {
      var obj = {};
      obj.x = this.width;
      obj.y = this.height;
      obj.tiles = this.tilesObject();
      obj.tilesconfig = {};
      for (let x in obj.tiles) {
        var type = obj.tiles[x].type;
        if (type !== undefined && obj.tilesconfig[type] === undefined) {
          obj.tilesconfig[type] = this.tiles.GetTile(type);
        }
      }
      console.log(obj);
      return obj;
    }
    tileObject(x, y) {
      var obj = {};
      obj.type = this.tiles.GetRandomTile();
      obj.x = x;
      obj.y = Y;
      obj.z = 0;
      obj.layer = {};
      return obj;
    }
    tilesObject() {
      var obj = {};
      obj.x = 32;
      obj.y = 32;
      for (var x = 0; x < this.width; x++) {
        for (var y = 0; y < this.height; y++) {
              obj['tile'+x+'x'+y] = this.tileObject(x,y);
            }
      }
      return obj;
  }
  }
};
