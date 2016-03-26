"use strict";

var districts = require("./config/districts");
var Board = require("./models/Board");

const PLAYERS = [{name: "Alex"}, {name: "Choy"}, {name: "Mich"}, {name: "Caro"}];
var board = new Board(districts);

for(let i=0, len = board.districts.length; i < len; i++){
    let mDistrict = board.districts[i];
    let index = Math.floor((Math.random() * PLAYERS.length));
    mDistrict.winner = PLAYERS[index].name;
}

for(let i=0,len = board.districts.length; i < len; i++){
    let mDistrict = board.districts[i];
    let index = Math.floor((Math.random() * PLAYERS.length));
    mDistrict.winner = PLAYERS[index].name;
}

for(let i=0,len = board.neighborhoods.length; i<len; i++){
    let neighborhood = board.neighborhoods[i];
    console.log(neighborhood);
    console.log(board.resultsOf(neighborhood));
    console.log(board.neighborhoodWinner(neighborhood));
}

