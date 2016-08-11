'use strict';
class SpriteHandler {
    constructor() {
        this.sprites = new Map();
    }

    add(key, item){
        return this.sprites.set(key, item)
    }

    get(key){
        return this.sprites.get(key);
    }
}
