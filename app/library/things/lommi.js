'use strict';

class Lommi {
  constructor(x, y, texture) {
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

    this.texture = texture;
    this.sprite = game.add.sprite(this.x, this.y, this.texture);
    this.sprite.anchor.setTo(0.5, 0.5);
  }

  moveLeft() {
    this.sprite.x -= 1;
  }

  moveRight() {
    this.sprite.x += 1;
  }

  moveUp() {
    this.sprite.y -= 1;
  }

  moveDown() {
    this.sprite.y += 1;
  }
}
