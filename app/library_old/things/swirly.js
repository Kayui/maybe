'use strict';

class Swirly {
  constructor(x, y, speed, texture) {
    if (x === "center") {
      this.x = game.world.centerX;
    }
    else {
      this.x = x;
    }
    if (y === "center") {
      this.y = game.world.centerY;
    }
    else {
      this.y = y;
    }
    
    this.speed = speed;
    this.texture = texture;
    this.sprite = game.add.sprite(this.x, this.y, this.texture);
    this.sprite.anchor.setTo(0.5, 0.5);
  }

  swirl() {
      this.sprite.angle -= this.speed;
  }
}
