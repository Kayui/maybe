'use strict';

class Minimap {
    constructor() {
        this.x = 10;
        this.y = 10;
        this.width = $_.map.width;
        this.height = $_.map.height;
        this.draw();
        // x and y represent the top left corner of the map
        // aim for bottom right corner of the screen

        // draw as spritegroup
    }

    draw() {
        this.minimap = $_.game.add.graphics(100, 100);
        this.minimap.beginFill(0xffffff);
        this.minimap.drawRect(this.x, this.y, this.width, this.height);
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




        this.updateCameraPos();
        //this.updateCharacterPos();
        // do some drawing!
    }

    updateCameraPos() {
        // Get there the camera is and update the camera rectangle
    }

    updateCharacterPos() {
        // Get all active characters and populate a representing array
    }

}