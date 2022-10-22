const canvas = document.getElementById("canvas");
document.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("myBtn").click();
  }
}); 
const ctx = canvas.getContext("2d");

const canvasH = canvas.height;
const canvasW = canvas.width;
let bricks = [];
let brickW = 100;
let bricOffset = 8;
let brickH = 30;

let leftPressed = false;
let rightPressed = false;

let interval, x, y, dx, dy;
let paddleW;
let paddleX = canvasW / 2 - paddleW / 2;
let paddleY = canvasH - 10;
let radius ;
let score = 0;
let brickCount = 8;
let brickRows = 3;
let life;

setVariables();
drawBall();
drawPaddle();
createBricks();
drawBricks();
drawScore();
drawLife()
paddleNavigation();

// startGame();

function drawScore() {
  ctx.beginPath();

  ctx.fillStyle = "#1A4D2E";
  ctx.fill();ctx.font = "25px Arial";
  ctx.fillText("Score: " + score, 20, 25);
  ctx.closePath();
}
function drawLife() {
  ctx.beginPath();

  ctx.fillStyle = "#1A4D2E";
  ctx.fill();ctx.font = "25px Arial";
  ctx.fillText("Life: " + life, 900, 25);
  
  ctx.closePath();
}

function createBricks() {
  for (let j = 0; j < brickRows; j++) {
    bricks[j] = [];

    for (let i = 0; i < brickCount; i++) {
      bricks[j][i] = { x: 0, y: 0, isVisible: true };
    }
  }
}

function drawBricks() {
  for (let j = 0; j < brickRows; j++) {
    for (let i = 0; i < brickCount; i++) {
      if (bricks[j][i].isVisible) {
        let bricX =65 + i * (brickW + bricOffset);
        let bricY = (j + 1) * (bricOffset + 30);
        bricks[j][i].x = bricX;
        bricks[j][i].y = bricY;

        ctx.beginPath();
        ctx.rect(bricX, bricY, brickW, brickH);
        ctx.fillStyle = "#18978F";
        ctx.fill();

        ctx.closePath();
      }
    }
  }
}

function paddleNavigation() {
  document.addEventListener("keydown", handelKeyDown);
  document.addEventListener("keyup", handelKeyUp);

  function handelKeyDown(e) {
    if (e.key === "ArrowRight") {
      rightPressed = true;
    }
    if (e.key === "ArrowLeft") {
      leftPressed = true;
    }
  }
  function handelKeyUp(e) {
    if (e.key === "ArrowRight") {
      rightPressed = false;
    }
    if (e.key === "ArrowLeft") {
      leftPressed = false;
    }
   
  }
}

function detectCollision() {
  if (x + dx >= canvasW || x + dx <= 0) {
    dx = -dx;
  }
  if (y + dy > canvasH - radius) {
    if (x + dx > paddleX && x + dx < paddleX + paddleW) {
      dy = -dy;
      dx=dx+(x+dx-paddleX)/100;
    }
  }

  if (y + dy < 0) {
    dy = -dy;
  }

  for (let b = 0; b < bricks.length; b++) {
    for (let i = 0; i < bricks[b].length; i++) {
      let brick = bricks[b][i];
      if (brick.isVisible) {
        if (
          x > brick.x &&
          x < brick.x + brickW &&
          y > brick.y &&
          y < brick.y + brickH
        ) {
          brick.isVisible = false;
          score += 1;
          dy = -dy;
          checkYouWon();
        }
      }
    }
  }
}

function startGame(speed) {
  if (!interval) {
    interval = setInterval(() => {
      if (rightPressed) {
        if( paddleX + 10+paddleW<=canvas.width)
        paddleX = paddleX + 10;
      }
      if (leftPressed) {
        if( paddleX - 10>=0)
        paddleX = paddleX - 10;
      }
      detectCollision();
      x = x + dx;
      y = y + dy;
      checkGameOver();

      ctx.clearRect(0, 0, canvasW, canvasH);
      drawPaddle();
      drawBall();
      drawBricks();
      drawScore();
      drawLife();
    }, (25/speed));
  }
}

function checkGameOver() {
  if (y === canvasH&&life<=1) {
    alert("Game Over")
      clearInterval(interval);
      interval = null;
     location.reload();
      setVariables();
    
   
  }
  else if(y=== canvasH)
  {
    life=life-1;
  alert("you stilll have life!!")
      clearInterval(interval);
      interval = null;
     setVariables2();
    
    
  }
}

function checkYouWon() {
  if (score === 24) {
    alert("You Won!!!");
    clearInterval(interval);
    interval = null;
    location.reload();
    setVariables();
  }
}
function setVariables2() {
  x = canvasW / 2;
  y = canvasH - 40;
  dx = 10;
  dy = -8;
  radius =20;
  paddleW = 150;
  paddleX = canvasW / 2 - paddleW / 2;
  paddleY = canvasH -20;
  rightPressed = false;
  leftPressed=false;
  
}


function setVariables() {
  x = canvasW / 2;
  y = canvasH - 40;
  dx = 10;
  dy = -8;
  radius =20;
  paddleW = 150;
  paddleX = canvasW / 2 - paddleW / 2;
  paddleY = canvasH -20;
  life=3;
  
}

function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI, false);

  ctx.fillStyle = "#18978F";
  ctx.fill();
  ctx.closePath();
}

function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, paddleY, paddleW, 30);

  ctx.fillStyle = "#18978F";
  ctx.fill();

  ctx.closePath();
}
