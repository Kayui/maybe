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
    //console.log("Sending message: "+name+ " with option " + JSON.stringify(option));
    // END: DEBUG
    let event = document.createEvent('HTMLEvents')
    event.initEvent(name, true, true);
    event.option = option;
  	document.dispatchEvent(event);
  }

  getEvent(name, funct) {
  	return document.addEventListener(name, funct , false);
  }

  removeEvent(name, funct) {
  	return document.removeEventListener(name, funct, false);
  }

  watchObject(obj, func, options)
  {
    console.log("watch object");
    var param = options.param === undefined ? undefined : options.param;
    var changeInto = options.changeInto === undefined ? undefined : options.changeInto;
    var recursive = options.recursive === undefined ? false : options.recurisve;

    if (param === undefined & changeInto === undefined) {
      changeInto = false;
    } else {
      changeInto = changeInto === undefined ? true : changeInto;
    }
    if (param === undefined) {
      var param = obj;
    }

    var changeHappend = function() {
      func();
    };
    var callBack = function(obj, param, changeInto, recursive, func) {
      console.log("calling me");
      setTimeout(function(){
        var options = {param: param,
                        changeInto: changeInto,
                        recursive: recursive};

        this.watchObject(obj, func, param, changeInto);
      }.bind(this), 300);
    }.bind(this);

    if (changeInto === true & obj === param) {
      console.log("fixing 1");
      changeHappend();
      if (recursive) callBack(param, changeInto, recursive, func);
    }

    else if (changeInto === false & obj !== param) {
      console.log("fixing 2");
      changeHappend();
      if (recursive) callBack(obj, param, changeInto, recursive, func);
    }
    else {
      console.log("Calling back");
      callBack(obj, param, changeInto, recursive, func);
    }

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
    $_.input = new InputHandler();
    $_.map = new WorldMap();
    $_.menu = new Menu();
    this.game.world.setBounds(0, 0, 1920, 1440);
    this.player = new Player(200, 200, "nothing really");
  }

  update() {
    $_.input.update();

  }

  render() {}
}
