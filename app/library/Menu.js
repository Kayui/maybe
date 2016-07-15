'use strict';	
class Menu {
	constructor() {
		document.body.addEventListener('keydown', function(evt) {
		   	if ("key" in evt) {
			    if (evt.key == "Escape") {
		    		// !!DEBUG    
			      	console.log("Escape pressed!");
			       	// ENDDEBUG!!
			       	gui.App.quit();
			    }
		    }
		});	
    }
}