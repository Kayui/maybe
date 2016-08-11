'use strict';
let socket = "";
let $_ = new Renderer();
let connectedString = false;
var connectToServer = function() {
  socket = io.connect();
  console.log("Connecting…");
  socket.on('connect', function() {
    console.log("Connected!");
    socket.emit('Map:Get:WorldMap', {data: 'hey' });
  });
};
$_.getEvent('ClientReady', connectToServer);