'use strict';

class Minimap {
    constructor() {
        this.offsetX = 200;
        this.offsetY = 200;
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
        // colors:
        // http://phaser.io/examples/v2/create/gen-paint
        console.log("tiles:");
        console.log($_.map.map[0]);
        for(let y = 0; y < $_.map.height; y++){
            for(let x = 0; x < $_.map.width; x++){
                //console.log($_.map.map[0]
            }
        }
        var dudeData = [
            'DDDDDDDDDDDDDDDDDDDD',
            'D..................D',
            'D..................D',
            'D..................D',
            'D..................D',
            'D..................D',
            'D..................D',
            'D..................D',
            'D..................D',
            'D..................D',
            'D..................D',
            'D..................D',
            'D..................D',
            'D..................D',
            'D..................D',
            'D..................D',
            'D..................D',
            'D..................D',
            'DDDDDDDDDDDDDDDDDDDD'
        ];

        $_.game.create.texture('phaserDude', dudeData, 8, 8, 0);
        this.minimap = $_.game.add.sprite($_.game.camera.width - this.offsetX, $_.game.camera.height - this.offsetY, 'phaserDude');
        this.minimap.fixedToCamera = true;

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
        return;
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
