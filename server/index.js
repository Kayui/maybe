"use strict"
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var game = require('./Game/Game');
var tiles = new game.tiles.List();

/*app.get('/', function(req, res){
    gameFS.sendFile(req, res);
});*/
app.use(function(req, res){
    new game.fs.GameFile(req, res);
});

io.on('connection', function(socket){
  console.log('a user connected');
  socket.emit('Map:New:WorldMap', new game.map.Generator());
});

http.listen(3000, function(){
    console.log('listening on *:3000');
});
