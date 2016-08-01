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

  // Event handlers
  sendEvent (name, option) {

    if (option == undefined) {
  		option = {};
  	}
    // START: DEBUG!
    console.log("Sending message: "+name+ " with option " + JSON.stringify(option));
    // END: DEBUG

  	let event = new CustomEvent(name, option);
  	document.dispatchEvent(event);
  }

  getEvent(name, funct) {
  	return document.addEventListener(name,
  	funct, false);
  }

  removeEvent(name, funct) {
  	return document.removeEventListener(name, funct, false);
  }


  preload() {
    window.addEventListener('resize', function () {
      $_.game.renderer.resize(100, 100);
      $_.getResolution();
      $_.setResolution();
    });
    $_.game.stage.backgroundColor = "#333333";


    $_.getResolution();
    $_.setResolution();

  }

  create() {
    // Appending escape handling to the input object
    $_.input = new InputHandler();
    $_.map = new WorldMap();
    $_.menu = new Menu();
  }

  update() {
    $_.input.update();
  }

  render() {
    // CALL SOMETHING ELSE
  }
}
