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
  
    this.makeReady = function() {
      this.draw();
      this.keyReady();
    }.bind(this);

    $_.getEvent('MapReady', this.makeReady);

    }

  draw(){
    this.sprite = $_.game.add.sprite(this.x, this.y, this.texture);
    $_.game.camera.follow(this.sprite);
    this.sprite.anchor.setTo(0.5, 0.5);
  }

  keyReady() {
    this.PlayerMoveUp = function() {
      this.moveUp();
    }.bind(this);
    $_.getEvent('KeyPressedUp', this.PlayerMoveUp);

    this.PlayerMoveDown = function() {
      this.moveDown();
    }.bind(this);
    $_.getEvent('KeyPressedDown', this.PlayerMoveDown);

    this.PlayerMoveLeft = function() {
      this.moveLeft();
    }.bind(this);
    $_.getEvent('KeyPressedLeft', this.PlayerMoveLeft);

    this.PlayerMoveRight = function() {
      this.moveRight();
    }.bind(this);
    $_.getEvent('KeyPressedRight', this.PlayerMoveRight);
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
    this.sprite.y -= 5;
    this.y -= 5;
  }

  moveDown() {
    this.sprite.y += 5;
    this.y += 5;
  }
}
