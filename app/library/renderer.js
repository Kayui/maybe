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

        // Testing multiple stages
        this.stage1 = new PIXI.Container();
        this.stage2 = new PIXI.Container();
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

    // Takes in a texture object, creates, stores and returns a sprite
    addSpriteFromTexture(key, texture) {

        return this.sprites.add(key, new PIXI.Sprite(texture));
    }

    // Takes in a sprite object, stores and returns it
    addSpriteObject(key, object) {
        return this.sprites.add(key, object);
    }

    // Takes in an image url, creates a texture, stores and returns it
    addTextureFromImage(key, image) {
        console.log("Added Texture: " + key + " : " + image);
        return this.textures.add(key, PIXI.Texture.fromImage(image));
    }

    // Takes in a texture object, stores and returns it
    addTextureFromObject(key, object) {
        return this.textures.add(key, object);
    }

    // Initialize objects and assets here
    initAssets() {
        this.addSpriteFromTexture('grass', this.addTextureFromImage('grass', 'assets/grass.png'));
        this.sprites.get('grass').position.x = 200;
        this.sprites.get('grass').position.y = 200;

        this.addSpriteFromTexture('dirt', this.addTextureFromImage('dirt', 'assets/dirt.png'));
        this.sprites.get('dirt').position.x = 200;
        this.sprites.get('dirt').position.y = 200;
        
        this.stage1.addChild(this.sprites.get('grass'));
        this.stage2.addChild(this.sprites.get('dirt'));
    }

    // Main game loop, call updates here
    animate() {
        this.animateEv = this.animate.bind(this);
        requestAnimationFrame(this.animateEv);

        this.sprites.get('grass').position.x += 1;

        // render the container
        if(this.sprites.get('grass').position.x > 300){
        this.renderer.render(this.stage2);
            
        }
        else{
            this.renderer.render(this.stage1);
        }
    }
}
