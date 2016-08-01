"use strict"
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
      obj.y = y;
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
