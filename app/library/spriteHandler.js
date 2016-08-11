'use strict';
class SpriteHandler {
    constructor() {
        this.sprites = new Map();
    }

    add(key, item){
        this.sprites.set(key, item);
        return this.sprites.get(key);
    }

    get(key){
        return this.sprites.get(key);
    }
}
