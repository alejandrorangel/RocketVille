var districts = require("./config/districts");
var Board = require("./models/Board");


const PLAYERS = [{name: "Alex"}, {name: "Choy"}, {name: "Mich"}, {name: "Caro"}];
var board = new Board(districts);

board.districts.forEach(function (mDistrict) {
    var index = Math.floor((Math.random() * PLAYERS.length));
    mDistrict.winner = PLAYERS[index].name;
});

board.neighborhoods.forEach(function (neighborhood) {
    console.log(neighborhood);
    console.log(board.resultsOf(neighborhood));
    console.log(board.districtWinner(board.resultsOf(neighborhood)));
});
