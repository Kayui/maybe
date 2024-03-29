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
  /* TODO: Fix watchobject so it watches other objects than game.load.hasLoaded :) */
  watchObject(objname, func, options)
  {
    console.log("Watch object");
    var param = options.param === undefined ? undefined : options.param;
    var changeInto = options.changeInto === undefined ? undefined : options.changeInto;
    var recursive = options.recursive === undefined ? false : options.recurisve;
    var buffer = $_;
    for (let x in objname.split(".")) {
      buffer = buffer[objname.split(".")[x]];
    }
    var obj = buffer;
    console.log("object is "+obj);
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
    var callBack = function(objname, param, changeInto, recursive, func) {
      setTimeout(function(){
        var options = {param: param,
                        changeInto: changeInto,
                        recursive: recursive};

        this.watchObject(objname, func, options);
      }.bind(this), 300);
    }.bind(this);


    if (changeInto === true & obj === param) {
      changeHappend();
      if (recursive) callBack(objname, param, changeInto, recursive, func);
    }

    else if (changeInto === false & obj !== param) {
      changeHappend();
      if (recursive) callBack(objname, param, changeInto, recursive, func);
    }
    else {
      callBack(objname, param, changeInto, recursive, func);
    }

  }

  clear() {
    $_.game.world.removeAll()
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
    $_.game.load.image('player', 'assets/player.png');
  }

  create() {
    $_.input = new InputHandler();
    $_.map = new WorldMap();
    $_.menu = new Menu();
    this.player = new Player(200, 200, "player");
  }

  update() {
    if($_.minimap !== undefined){
      $_.minimap.update();
    }
    $_.input.update();
  }

  render() {}
}
