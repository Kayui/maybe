'use strict';
let socket = "";
let $_ = new Canvas();
var connectToServer = function() {
  socket = io.connect();
}
$_.getEvent('ClientReady', connectToServer);
