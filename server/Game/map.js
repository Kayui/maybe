"use strict"

module.exports = {
  Generator: class MapGenerator {
    constructor(tiles, seed, mapType) {
      this.width = 90;
      this.height = 90;
      this.tilesWidth = 32;
      this.tilesHeight = 32;
      this.tiles = tiles;
      this.mapObject = this.mapObject();
    }
    getMap() {
      return this.mapObject;
    }

    mapObject() {
      console.log("Generating Map Object");
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
      // this.prettyPrint(obj);
      return obj;
    }

    tileObject(x, y) {
      var obj = {};
      obj.type = this.tiles.GetRandomTile();
      obj.x = x;
      obj.y = y;
      obj.z = 0;
      obj.layer = {};
      return obj;
    }

    tilesObject() {
      var obj = {};
      obj.x = this.tilesWidth;
      obj.y = this.tilesHeight;
      for (var x = 0; x < this.width; x++) {
        for (var y = 0; y < this.height; y++) {
          if (!obj['tile' + x + 'x' + y]) {
            obj['tile' + x + 'x' + y] = this.tileObject(x, y);
          }
        }
      }
      return obj;
    }
  }

};
