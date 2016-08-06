'use strict';

class Menu {
  constructor(menuon) {
    this.isOn = menuon == undefined ? true : menuon;
    this.escapeEv = this.escape.bind(this);
    this.addListeners();

  }
  escape() {
    if (this.isOn) {
      gui.App.quit();
    }
  }
  addListeners() {
    if (this.isOn) {
      $_.getEvent('KeyPressedEscape', this.escapeEv);
    }
  }
}
