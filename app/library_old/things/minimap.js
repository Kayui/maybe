'use strict';

class Minimap {
    constructor() {
        this.offsetX = 200;
        this.offsetY = 200;
        this.width = ($_.map.width * $_.map.tile.x) / 10;
        this.height = ($_.map.height * $_.map.tile.y) / 10;
        this.drawEv = this.draw.bind(this);

        // Creating elements
        this.minimap = document.createElement('div');
        this.viewport = document.createElement('div');
        this.minimap.className = "minimap";
        this.viewport.className = "viewport";
        document.body.appendChild(this.minimap);
        this.minimap.appendChild(this.viewport);
        this.minimap.addEventListener('click', this.click);
        $_.getEvent('SpritesReady', this.drawEv);
        // this.draw();
        // x and y represent the top left corner of the map
        // aim for bottom right corner of the screen
        // draw as spritegroup
    }

    click(ev) {
      var x = ev.layerX;
      var y = ev.layerY;
      var cameraPosY = (y / 200) * ($_.map.height * $_.map.tile.y);

      $_.game.camera.y = (y / 200) * ($_.map.height * $_.map.tile.y) - ($_.game.camera.height / 2);
      $_.game.camera.x = (x / 200) * ($_.map.width * $_.map.tile.x) - ($_.game.camera.width / 2);
    }

    draw() {
        // colors:
        // http://phaser.io/examples/v2/create/gen-paint

        // Generating edges for top and bottom
        var mapData = [];
        for (let y = 0; y < $_.map.height; y++) {
            let line = "";
            for (let x = 0; x < $_.map.width; x++) {
                line += $_.map.map[0]['tile' + x + 'x' + y].getColorTag();
            }
            mapData.push(line);
        }
        var mapTexture = $_.game.create.texture('someKey', mapData, 8, 8, 0);
        this.url = mapTexture.baseTexture.source.currentSrc;
        this.minimap.style.backgroundImage = "url(" + this.url + ")";
        this.minimap.style.backgroundSize = "contain";


        /* $_.watchObject("minimap.mapTexture.baseTexture.hasLoaded",function(){
         $_.minimap.minimap = $_.game.add.sprite(0,0, 'someKey');
         console.log($_.minimap.minimap);
         $_.minimap.minimap.fixedToCamera = true;
         console.log("I fire you on baby! Motherfucker, client! fuck you! ");
        }, {param: true}); */
        //this.minimap = $_.game.add.sprite(0,0, 'someKey');
        //this.minimap.fixedToCamera = true;
        //console.log(this.minimap);
        //console.log("Minimap is done!");

        // draw rectangle bounds of map and camera.
        // find with and height of world.
        // find with and height of camera.
        // scale both down, draw two rectangles with no inner fill

        /*
                ______________
                |     |      |
                |_____|      |
                |            |
                |            |
                |____________|

        */



        this.update();
        //this.updateCharacterPos();
        // do some drawing!
    }

    update() {
        this.updateCameraPos();
    }

    updateCameraPos() {
        var mapWidth = 200;
        var mapHeight = 200;
        var originalCameraHeight = $_.game.camera.height;
        var originalMapHeight = $_.map.height * $_.map.tile.y;
        var originalCameraWidth = $_.game.camera.width;
        var originalMapWidth = $_.map.width * $_.map.tile.x;
        var height = (originalCameraHeight / originalMapHeight) * mapHeight;
        var width = (originalCameraWidth / originalMapWidth) * mapWidth;
        this.viewport.style.height = height + "px";
        this.viewport.style.width = width + "px";

        var originalCameraPosX = $_.game.camera.x;
        var originalCameraPosY = $_.game.camera.y;
        var x = originalCameraPosX === 0 ? 0 : originalCameraPosX  / originalMapWidth;
        var y = originalCameraPosY === 0 ? 0 : originalCameraPosY  / originalMapHeight;
        this.viewport.style.left = mapWidth * x + "px";
        this.viewport.style.top  = mapHeight * y + "px";


        //this.viewPort.style.width =
        // Get there the camera is and update the camera rectangle
    }

    updateCharacterPos() {
        // Get all active characters and populate a representing array
    }

}
