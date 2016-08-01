"use strict"
module.exports = {
  Generator: class MapGenerator {
    constructor() {
      this.width = 60;
      this.height = 45;
      return this.mapObject();
    }
    mapObject() {
      var obj = {};
      obj.x = this.width;
      obj.y = this.height;
      obj.tiles = this.tilesObject();
      return obj;
    }
    tileObject(x, y) {
      var obj = {};
      obj.type = "grass";
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
