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
    //$_.game.camera.follow(this.sprite);
    this.sprite.anchor.setTo(0.5, 0.5);
    // TODO: This should really not be handled by the player class
    $_.sendEvent('SpritesReady');
  }

  // SMÁ HAX SORrÍ ExxKI! Drepa Mjig!
  keyReady() {
    this.PlayerMoveUp = function() {
      $_.game.camera.y -= 5;
      //this.moveUp();
    }.bind(this);
    $_.getEvent('KeyPressedUp', this.PlayerMoveUp);

    this.PlayerMoveDown = function() {
      $_.game.camera.y += 5;
      //this.moveDown();
    }.bind(this);
    $_.getEvent('KeyPressedDown', this.PlayerMoveDown);

    this.PlayerMoveLeft = function() {
      $_.game.camera.x -= 5;
      //this.moveLeft();
    }.bind(this);
    $_.getEvent('KeyPressedLeft', this.PlayerMoveLeft);

    this.PlayerMoveRight = function() {
      $_.game.camera.x += 5;
      //this.moveRight();
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
