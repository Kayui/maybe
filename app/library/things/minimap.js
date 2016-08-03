'use strict';

class Minimap {
    constructor() {
        this.offsetX = 50;
        this.offsetY = 50;
        this.width = ($_.map.width * $_.map.tile.x) / 10;
        this.height = ($_.map.height * $_.map.tile.y) / 10;
        this.drawEv = this.draw.bind(this);
        $_.getEvent('SpritesReady', this.drawEv);
        // this.draw();
        // x and y represent the top left corner of the map
        // aim for bottom right corner of the screen
        // draw as spritegroup
    }

    draw() {
        this.minimap = $_.game.add.graphics();
        this.minimap.beginFill(0xffffff);
        console.log($_.game.camera);
        this.minimap.drawRect(0, 0, this.width, this.height);
        console.log(this.minimap);
        this.minimap.endFill();
        window.graphics = this.minimap;
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
        //this.updateCameraPos();
        //this.updateCharacterPos();
        // do some drawing!
    }

    update() {
        if(this.minimap !== undefined){
            this.minimap.x = $_.game.camera.x + $_.game.camera.width - this.width - this.offsetX;
            this.minimap.y = $_.game.camera.y + $_.game.camera.height - this.height - this.offsetY;
        }   
    }

    updateCameraPos() {
        // Get there the camera is and update the camera rectangle
    }

    updateCharacterPos() {
        // Get all active characters and populate a representing array
    }

}
