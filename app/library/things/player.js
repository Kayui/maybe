'use strict';

class Player {
  constructor(x, y, texture) {
    if (x === "center") {
      this.x = $_.game.world.centerX;
    }
    else {
      this.x = x;
    }
    if (y === "center") {
      this.y = $_.game.world.centerY;
    }
    else {
      this.y = y;
    }

    this.texture = texture;
    this.sprite = $_.game.add.sprite(this.x, this.y, this.texture);
    $_.game.camera.follow(this.sprite);
    this.sprite.anchor.setTo(0.5, 0.5);
  }

  moveLeft() {
    this.sprite.x -= 5;
    this.x -= 5;
  }

  moveRight() {
    this.sprite.x += 5;
    this.x += 5;
  }

  moveUp() {
    console.log("asdasd");
    this.sprite.y -= 5;
    this.y -= 5;
  }

  moveDown() {
    this.sprite.y += 5;
    this.y += 5;
  }
}
