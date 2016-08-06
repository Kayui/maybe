var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var tiles = require('./Game/tiles');
var tiles = new tiles.Tiles();

var route = require('./route')(app, http, io, tiles);
