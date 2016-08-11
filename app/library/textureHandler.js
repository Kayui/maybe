'use strict';
class TextureHandler {
    constructor() {
        this.textures = new Map();
    }

    add(key, item){
        this.textures.set(key, item);
        return this.textures.get(key);
    }
    
    get(key){
        return this.textures.get(key);
    }
}