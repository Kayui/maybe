'use strict';
if (typeof require == 'function') { 
	console.log("hey");
	var gui = require('nw.gui');
} else {
	var gui = {};
	gui.App =  {
		quit: function() {
			console.log("Quitting!");
		}
	};			
}