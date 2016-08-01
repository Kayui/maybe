"use strict";


// TMAP SIZE SHOULD NOT BE HARDCODED!!!!

class WorldMap {
  constructor() {
    this.map = [];
    this.generate();
    this.draw();
  }
  generate() {
        // Generate a map full of grass
        for(let x = 0; x < $_.maxDimension.getX(); x+=32){
          this.map[x] = [];
          for(let y = 0; y < $_.maxDimension.getY(); y+=32){
            this.map[x][y] = new GrassTile(x,y);
          }
        }
  }
  draw() {
    // Draw all the things!
    for(let x = 0; x < $_.maxDimension.getX(); x+=32){
      for(let y = 0; y < $_.maxDimension.getY(); y+=32){
        this.map[x][y].draw();
      }
    }
  }
}
