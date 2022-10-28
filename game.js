var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var level = 0;

function nextSequence() {
  userClickedPattern = [];

  level++;
  $("#level-title").text("Level "+level);

  var randomNumber = Math.floor(Math.random()*4);

  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#"+randomChosenColour).fadeOut(100).fadeIn(100);

  playSound(randomChosenColour);
}

$(".btn").click(function() {
  var userChosenColour = $(this).attr("id");
  var len = userClickedPattern.push(userChosenColour);

  animatePress(userChosenColour);
  playSound(userChosenColour);

  checkAnswer(len-1);
});

function playSound(name) {
  var audio = new Audio("sounds/"+name+".mp3");
  audio.play();
}

function animatePress(currentColour) {
  $("#"+currentColour).addClass("pressed");

  setTimeout(function() {
    $("#"+currentColour).removeClass("pressed");
  }, 100);
}

var firstKeyPressed = false;

$(document).keydown(function() {
  if(!firstKeyPressed) {
    firstKeyPressed = true;
    $("#level-title").text("Level "+level);
    nextSequence();
  }
});

function checkAnswer(currentLevel) {
  if(userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    if(userClickedPattern.length === gamePattern.length) {
      setTimeout(function() {
        nextSequence();
      }, 1000);
    }
  }
  else {
    playSound("wrong");

    $("body").addClass("game-over");
    setTimeout(function() {
      $("body").removeClass("game-over");
    }, 200);

    $("#level-title").text("Game Over, Press Any Key to Restart");
    startOver();
  }
}

function startOver() {
  level = 0;
  gamePattern = [];
  firstKeyPressed = false;
}
