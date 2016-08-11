'use strict';
class TextureHandler {
    constructor() {
        this.textures = new Map();
    }

    add(key, item){
        return this.textures.set(key, item)
    }
    
    get(key){
        return this.textures.get(key);
    }
}