'use strict';
let socket = "";
let $_ = new Canvas();
var connectToServer = function() {
  socket = io.connect('http://localhost:3000');
}
$_.getEvent('ClientReady', connectToServer);
