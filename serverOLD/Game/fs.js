"use strict"
module.exports = {
  // Class for sending game files
  GameFile: class GameFile {
    constructor(req, res) {
      this.appDir = "../app/";
      this.nodeDir = '../';
      this.index = 'index.html';
      this.error = 404;
      this.req = req;
      this.res = res;
      this.fs = require('fs');

      this.sendFile();
    }

    sendFile() {
      if (this.req === undefined || this.res === undefined) return;
      if (this.req._parsedUrl === undefined || this.res.sendFile === undefined) return;
      this.path = this.req._parsedUrl.path ? this.req._parsedUrl.path : this.index;
      var rootDir = this.path.indexOf('/node_modules') == 0 ?
                    this.nodeDir : this.appDir;
      // Check if file exists
      // console.log("getting "+this.path+" from "+rootDir);
      if (this.fs.exists(rootDir+this.path, function(exists) {
        if(exists) {
          // If this is a directory make a recursive call and add index.html
          if (this.fs.lstatSync(rootDir+this.path).isDirectory()) {
            req._parsedUrl.path = this.path+this.index;
            sendFile(this.req,this.res);
            return;
          }
          res.sendFile(this.path, {root: rootDir});
        } else { // File does not exist: 404
           this.res.sendStatus(this.error);
        }
      }.bind(this)));
    }
  }
};
