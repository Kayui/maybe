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
	              if (evt.key == "ArrowUp" || evt.key == 'w') {
	                  guy.moveUp();
	                  canvas.draw();
	              }
	              if (evt.key == "ArrowDown" || evt.key == 's') {
	                  guy.moveDown();
	                  canvas.draw();
	              }
	              if (evt.key == "ArrowLeft" || evt.key == 'a') {
	                  guy.moveLeft();
	                  canvas.draw();
	              }
	              if (evt.key == "ArrowRight" || evt.key == 'd') {
	                  guy.moveRight();
	                  canvas.draw();
	              }
	          }
        });
    }
}
