let boxes = document.querySelectorAll('.box');
let currentPlayer = 'X';
let startingPlayer = 'O';
let x = [];
let o = [];
let xWon = 0;
let oWon = 0;

const wins = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]];

function selectBox(evt) {
    evt.target.innerHTML = currentPlayer;
    const val = parseInt(evt.target.id, 10);
    if(currentPlayer == 'X') {
        x.push(val);
    } else {
        o.push(val);
    }
    let won = checkWinConditions();
    if(won) {
        endGame();
    } else {
        changePlayer();
    }
    evt.target.removeEventListener('click', selectBox);
}

function startGame(){
    if(startingPlayer == 'O') {
        currentPlayer = startingPlayer = 'X';
    } else {
        currentPlayer = startingPlayer = 'O';
    }

    boxes.forEach(function(box){
        box.innerHTML = "";
        box.addEventListener('click', selectBox)
    });
    x = []
    o = []
    document.querySelector('.winner').style.display = 'none';
    document.getElementById('currentPlayer').innerHTML = currentPlayer;
}

function changePlayer() {
    currentPlayer =  currentPlayer == 'X'? 'O' : 'X';
    document.getElementById('currentPlayer').innerHTML = currentPlayer;
}

function checkWinConditions() {
    const checked = currentPlayer == 'X'? x : o;
    let doesWin = false;
    wins.forEach(function(win){
        let hasAll = win.every(function(b){
            return checked.includes(b);
        });
        if(hasAll) {
            doesWin = true;
        }
    })
    return doesWin;
}

function endGame() {
    document.getElementById('winningPlayer').innerHTML = currentPlayer;
    document.querySelector('.winner').style.display = 'block';
    if(currentPlayer == 'X') {
        xWon ++;
    } else {
        oWon ++;
    }
    document.getElementById('xTotalWins').innerHTML = xWon;
    document.getElementById('oTotalWins').innerHTML = oWon;
    boxes.forEach(function(box){
        box.removeEventListener('click', selectBox);
    })
}


window.addEventListener('load', function(){
    startGame();
    document.getElementById('startGameBtn').addEventListener('click', startGame)
})
