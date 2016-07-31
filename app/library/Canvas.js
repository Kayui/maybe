'use strict';
class Canvas {
  constructor() {
    this.game = new Phaser.Game("100", "100", Phaser.AUTO, 'gg',
    { preload: this.preload,
      create: this.create,
      update: this.update,
      render: this.render });
  }
  getResolution() {
    /* TODO: MUCH LATER TODO
    create a function that decides on which resolution to scale to */
    this.maxDimension = new Dimension(640,480);
  }
  setResolution() {
    this.game.scale.maxWidth = this.maxDimension.getX();
    this.game.scale.maxHeight = this.maxDimension.getY();

    //this.game.stage.scale.startFullScreen();
    // We want to scale up to the preferred resolution
    this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    //this.game.stage.scaleMode = Phaser.StageScaleMode.SHOW_ALL;
    this.game.stage.scale.setShowAll();
    this.game.stage.scale.refresh();

  }

  preload() {
    console.log(this);
    $_.getResolution();
    $_.setResolution(this);
  }

  create() {
    // CALL SOMETHING ELSE
  }

  update() {
    // CALL SOMETHING ELSE
  }

  render() {
    // CALL SOMETHING ELSE
  }


}

let $_ = new Canvas();
