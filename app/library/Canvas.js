'use strict';
class Canvas {
  constructor() {
    this.game = new Phaser.Game("100", "100", Phaser.AUTO, 'gg',
      {
        preload: this.preload,
        create: this.create,
        update: this.update,
        render: this.render
      });
      this.input = new Object();
  }

  getResolution() {
    /* TODO: MUCH LATER TODO
    create a function that decides on which resolution to scale to */
    this.maxDimension = new Dimension(640, 480);
  }

  setResolution() {
    this.game.scale.maxWidth = this.maxDimension.getX();
    this.game.scale.maxHeight = this.maxDimension.getY();

    //this.game.stage.scale.startFullScreen();
    // We want to scale up to the preferred resolution
    this.game.scale.scaleMode = Phaser.ScaleManager.RESIZE;
    //this.game.stage.scaleMode = Phaser.StageScaleMode.SHOW_ALL;
    this.game.scale.updateLayout();
  }

  preload() {
    window.addEventListener('resize', function () {
      $_.game.renderer.resize(100, 100);
      $_.getResolution();
      $_.setResolution();
    });
    $_.getResolution();
    $_.setResolution();

  }

  create() {
    // Appending escape handling to the input object
    input.escape = $_.game.input.keyboard.addKey(Phaser.Keyboard.ESC);
  }

  update() {
    inputHandler();
  }

  render() {
    // CALL SOMETHING ELSE
  }
}

