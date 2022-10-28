var drumButtons = document.querySelectorAll(".drum");

for(var i=0 ; i<drumButtons.length ; i++)
{
  drumButtons[i].addEventListener("click", handleClick);
}

function handleClick()
{
  var buttonInnerHTML = this.innerHTML;
  playAudio(buttonInnerHTML);
  buttonAnimation(buttonInnerHTML);
}

document.addEventListener("keydown", handleClick2);

function handleClick2(event) {
  var keywordPressed = event.key;
  playAudio(keywordPressed);
  buttonAnimation(keywordPressed);
}

function playAudio(key) {
  switch(key) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;

    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;

    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;

    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;

    case "j":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;

    case "k":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;

    case "l":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;

    default:
      console.log(key);
  }
}

function buttonAnimation(key) {
  var activeButton = document.querySelector("."+key);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
