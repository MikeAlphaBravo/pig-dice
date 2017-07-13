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
var startGame = (function(playToInput) {
  console.log("execute startGame");
  $("#playToSpan").text(playToInput);
});
//addPlayer
function addPlayer() {
  $("#addPlayer").append('<div id="addPlayer" class="form-group">' +
    '<label for="Player.name">Player Name</label>' +
    '<input type="text" placeholder="Bart Simpson" maxlength="30" size="30">' +
  '</div>');
}
//newGame
function newGame() {
  var inputted
}




//front-end
$(document).ready(function() {
  $("#addPlayerBtn").click(function() {
    addPlayer();
  });

  $(".userInputs form").submit(function(event) {
    event.preventDefault();

    var playToInput = $("input#playTo").val();
    startGame(playToInput);
  });
});
