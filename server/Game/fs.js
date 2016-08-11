"use strict"

module.exports = function(req, res) {
  if (req === undefined || res === undefined) return;
  if (req._parsedUrl === undefined || res.sendFile === undefined) return;
  let fs = require('fs');
  let appDir = "../app/",
      nodeDir = '../',
      index = 'index.html',
      error = 404;
  let path = req._parsedUrl.path ? req._parsedUrl.path : index,
      rootDir = path.indexOf('/node_modules') == 0 ? nodeDir : appDir;
  let sendFile = function() {
    if (fs.exists(rootDir+path, function(exists) {
      if(exists) {
        if (fs.lstatSync(rootDir+path).isDirectory()) {
          res.sendStatus(error);
          return;
        }
        res.sendFile(path, {root: rootDir});
        return true;
      }
      else {
          res.sendStatus(error);
      }
    }));

  }
  sendFile();
  return;
}
