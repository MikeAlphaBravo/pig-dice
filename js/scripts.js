//Back-end
var newGame;
function Game(players, playTo, whoseTurn) {
  this.players = [];
  this.playTo = playTo;
  this.whoseTurn = whoseTurn;
}

function Player(name, turnScore, totalScore, holdScore, currentTurnRoll) {
  this.name = name;
  this.turnScore = turnScore;
  this.totalScore = totalScore;
  this.holdScore = holdScore;
  this.currentTurnRoll = currentTurnRoll;
}


//startGame
var startGame = (function(inputtedPlayTo, inputtedPlayerName) {
  console.log("execute startGame");
  $("#playToSpan").text(inputtedPlayTo);
  $(".activePlayer").text(inputtedPlayerName);
});
//addPlayer disabled until single player functionality
// function addPlayer() {
//   $("#addPlayer").append('<div id="addPlayer" class="form-group">' +
//     '<label for="Player.name">Player Name</label>' +
//     '<input type="text" placeholder="Bart Simpson" maxlength="30" size="30">' +
//   '</div>');
// }
//newGame
function createGame() {
  var inputted
}




//front-end
$(document).ready(function() {
  // $("#addPlayerBtn").click(function() {
  //   addPlayer();
  // });

  $(".userInputs form").submit(function(event) {
    event.preventDefault();

    var inputtedPlayTo = $("input#playTo").val();
    var inputtedPlayerName = $("input#playerName").val();
    startGame(inputtedPlayTo, inputtedPlayerName);
  });
});
