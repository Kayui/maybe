"use strict"

module.exports = {
  client: class client {
    constructor(socket, tiles) {
      this.tiles = tiles;
      this.socket = socket;
      this.map = require('./map');;
      this.mapGenerator = new this.map.Generator(this.tiles);
      socket.on('Map:Get:WorldMap', function(data){
        console.log("Sending map");
        socket.emit('Map:New:WorldMap', this.mapGenerator.getMap());
      }.bind(this));

    }
  }
};
