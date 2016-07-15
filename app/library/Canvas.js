'use strict';
class Canvas
{    	
    constructor() {    		
    	this._object = document.createElement('canvas');
    	this._ctx = this._object.getContext("2d");    		
        this.style();
        this.resize();    		    		    		

    	document.body.appendChild(this._object);
        		
    	window.addEventListener('resize', this.resize.bind(this));    		
    }
    	
    style() {
        this._object.style.position = "absolute";
    	this._object.style.top = this._object.style.left = "0";
    }

    fill() { /* Maybe not needed later */
        this._ctx.fillStyle = "#000000";
		this._ctx.fillRect(0, 0, this._object.width, this._object.height);
    }
    
    resize() {    		
        this._object.style.width = this.widthString();
    	this._object.style.height = this.heightString();    		
		this.fill();
    	
       	// !!DEBUG
    	console.log("resized canvas!");
    	// ENDDEBUG!!
    }
    
    heightString() {
        return window.innerHeight+"px";
    }
    
    widthString() {
        return window.innerWidth+"px";
    }
}