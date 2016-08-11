"use strict"

module.exports = {
  Tiles: class Tiles {
  constructor() {
    this.fs = require('fs');
    this.configPath = '../app/assets/tiles/config/';
    this.imgPath = '/assets/tiles/images/';
    let files = this.fs.readdirSync(this.configPath);
    this.tiles = {};
    this.tilesName = [];

    for (var i in files) {
      var obj = JSON.parse(this.fs.readFileSync(this.configPath + files[i], 'utf8'));
      this.tiles[files[i].replace('.json', '')] = obj;
      this.tilesName.push(files[i].replace('.json', ''));
    }
  }
  GetRandomTile() {
    return this.tilesName[Math.floor(Math.random() * this.tilesName.length)];
  }

  GetTile(name) {
    if (this.tiles[name] == undefined) {
      return;
    }
    var obj = this.tiles[name];
    obj.img = this.imgPath + "" + obj.img;
    return obj;
  }
}

};
