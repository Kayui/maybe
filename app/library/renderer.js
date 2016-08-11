'use strict';
class Renderer {
    constructor() {
        this.textures = new TextureHandler();
        this.sprites = new SpriteHandler();

        this.initRender();
        this.setResolution();
        this.createCanvas();
        this.initAssets();
        this.animate();
    }

    initRender() {
        this.renderer = PIXI.autoDetectRenderer(640, 480, {
            antialias: false,
            transparent: false,
            resolution: 1
        });
        this.stage = new PIXI.Container();
    }

    setResolution() {
        // This sets the dimensions of the canvas to the view height and width
        // TODO: set to a fixed size and scale all assets with nearest neighbour
        this.viewWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
        this.viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
        this.renderer.resize(this.viewWidth, this.viewHeight);
    }

    createCanvas() {
        this.canvasContainer = document.getElementsByClassName("canvasContainer")[0];
        this.canvas = this.canvasContainer.appendChild(this.renderer.view);
    }

    addSprite(key, texture){
        return this.sprites.add(key, texture);
    }

    loadTextureFromImg(url){
        return this.textures.add(key, PIXI.Texture.fromImage(url));
    }

    // Initialize objects and assets here
    initAssets() {
        this.addSprite('grass', this.loadTextureFromImg('grass','assets/grass.png'));

        /*
        var dirtTexture = PIXI.Texture.fromImage('assets/dirt.png');
        this.dirt = new PIXI.Sprite(dirtTexture);
        this.dirt.position.x = 200;
        this.dirt.position.y = 150;

        var grassTexture = PIXI.Texture.fromImage('assets/grass.png');
        this.grass = new PIXI.Sprite(grassTexture);
        this.grass.position.x = 210;
        this.grass.position.y = 160;

        var houseTexture = PIXI.Texture.fromImage('assets/house.png');
        this.house = new PIXI.Sprite(houseTexture);
        this.house.position.x = 220;
        this.house.position.y = 170;

        this.stage.addChild(this.dirt);
        this.stage.addChild(this.grass);
        this.stage.addChild(this.house);
        */
        this.forwards = true;
        this.up = true;
    }

    addTexture(key, path) {
        // adds a new texture object to the texture array
        // texture object:
        // texture.push(new Texture(key, pixi texture object))
    }

    // Main game loop, call updates here
    animate() {
        this.animateEv = this.animate.bind(this);
        requestAnimationFrame(this.animateEv);
        /*
        this.dirt.rotation += 0.1;
        this.grass.rotation -= 0.1;
        if (this.dirt.x > this.viewWidth) {
            this.forwards = false;
        }
        if (this.dirt.x < 0) {
            this.forwards = true;
        }

        if (this.forwards) {
            this.dirt.x += 10;
            this.grass.x += 10;
            this.house.x += 10;
        }
        else {
            this.dirt.x -= 10;
            this.grass.x -= 10;
            this.house.x -= 10;
        }

        if (this.dirt.y > this.viewHeight) {
            this.up = false;
        }
        if (this.dirt.y < 0) {
            this.up = true;
        }

        if (this.up) {
            this.dirt.y += 10;
            this.grass.y += 10;
            this.house.y += 10;
        }
        else {
            this.dirt.y -= 10;
            this.grass.y -= 10;
            this.house.y -= 10;
        }
        */
        // render the container
        this.renderer.render(this.stage);
    }
}