"use strict"
module.exports = {
  List: class List {
    constructor() {
      this.fs = require('fs');
      this.configPath = '../app/assets/tiles/config/';
      this.imgPath = '/assets/tiles/images/';
      var files = this.fs.readdirSync(this.configPath);
      this.tiles = {};
      this.tilesName = [];
      for (var i in files) {
        var obj = JSON.parse(this.fs.readFileSync(this.configPath+files[i], 'utf8'));
        this.tiles[files[i].replace('.json','')] = obj;
        this.tilesName.push(files[i].replace('.json',''));
      }
      console.log(this.GetRandomTile());
  }
  GetRandomTile() {
    return this.tilesName[Math.floor(Math.random() * this.tilesName.length)];
  }
  GetTile(name) {
    if(this.tiles[name] == undefined) {
      return;
    }
    var obj = this.tiles[name];
    obj.img = this.imgPath+""+obj.img;
    return obj;
  }
  }
}
