//Back-end
var roll;
var totalScore;
var turnScore = 0;


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
  $("#playToSpan").text(inputtedPlayTo);
  $(".activePlayer").text(inputtedPlayerName);
  $(".gameSetup").hide();
  $(".gamePlay").show();

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

//rollDice
var rollDice = (function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  roll = Math.floor(Math.random() * (max - min + 1)) + min;
  // console.log(roll);
  $("#rollDiceResult").text(roll)
  //toberefactoredintoobject
  turnScore += roll
  console.log(turnScore);
  var holdScore = (turnScore + totalScore);
});




//front-end
$(document).ready(function() {
  // $("#addPlayerBtn").click(function() {
  //   addPlayer();
  // });

  $("#rollDice").click(function() {
    rollDice(1,6);
  });

  $(".userInputs form").submit(function(event) {
    event.preventDefault();

    var inputtedPlayTo = $("input#playTo").val();
    var inputtedPlayerName = $("input#playerName").val();
    startGame(inputtedPlayTo, inputtedPlayerName);
  });
});
