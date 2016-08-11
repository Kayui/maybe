"use strict"

module.exports = function(app, http, io, tiles) {
  var keep = [];
  function randomstring(L){
      var s= '';
      var randomchar=function(){
      	var n= Math.floor(Math.random()*62);
      	if(n<10) return n; //1-10
      	if(n<36) return String.fromCharCode(n+55); //A-Z
      	return String.fromCharCode(n+61); //a-z
      }
      while(s.length< L) s+= randomchar();
      return s;
  }
  app.get('/', function(req, res){
    req._parsedUrl.path = '/index.html';
    var file = require('./Game/fs')(req, res);
  });

  app.use(function(req, res){
    // If file exists send it
    var file = require('./Game/fs')(req, res);
  });

  function newClient(socket) {
    var address = socket.handshake.address;
    var string = randomstring(12);
    var client = require('./Game/client');
    keep[address+":"+string] = new client.client(socket, tiles);
  }

  io.on('connection', function(socket){
    console.log('a user connected');
    newClient(socket);
  });

  http.listen(3000, function(){
    console.log('listening on *:3000');
  });

}
