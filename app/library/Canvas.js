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
        this._ctx.beginPath();
        this._ctx.strokeStyle = "#fff";
        this._ctx.lineWidth = 0.8;
        this._ctx.strokeRect(0,0,16,16);



        this._ctx.closePath();
        this._ctx.fill();
    }
    
    resize() {    		
        this._object.style.width = this.widthString();
    	this._object.style.height = this.heightString();    		
        // If we wish to scale the game, on bigger or smaller screens
        // we could set the canvas size to be different
        this._ctx.canvas.width = this.width();
        this._ctx.canvas.height = this.width();        
        // For example
        this._ctx.canvas.width = 640;
        this._ctx.canvas.height = 320;        
        
		this.fill();
    	
       	// !!DEBUG
    	console.log("resized canvas!");
    	// ENDDEBUG!!
    }
    
    heightString() {
        return this.height()+"px";
    }
    height() {
        return window.innerHeight;
    }
    
    
    widthString() {
        return this.width()+"px";
    }
    width() {
        return window.innerWidth;
    }
}