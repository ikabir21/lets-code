document.querySelectorAll("button").forEach((element) => {
    element.addEventListener("click", function () {
        playSound(element.innerHTML);
        playButtonAnim(element.innerHTML);
    });
});


document.addEventListener('keypress', function (event) {
    playSound(event.key);
    playButtonAnim(event.key);
});

/* 
    Function to play corressponding sound upon the character passed
    @PARAM char -> string
    @RETURNS void
*/
function playSound(char) {
    let audioSrc;
    switch (char) {
        case 'w':
            audioSrc = 'sounds/tom-1.mp3';
            break;
        case 'a':
            audioSrc = 'sounds/tom-2.mp3';
            break;
        case 's':
            audioSrc = 'sounds/tom-3.mp3';
            break;
        case 'd':
            audioSrc = 'sounds/tom-4.mp3';
            break;
        case 'j':
            audioSrc = 'sounds/snare.mp3';
            break;
        case 'k':
            audioSrc = 'sounds/crash.mp3';
            break;
        case 'l':
            audioSrc = 'sounds/kick-bass.mp3';
            break;
        default:
            break;
    }
    let audio = new Audio(audioSrc);
    audio.play();
}

/* 
    Function to play button animation when called
    @PARAM char -> string
    @RETURNS void
*/
function playButtonAnim(char) {
    document.querySelector('.' + char).classList.add('pressed');
    setTimeout(function () {
        document.querySelector('.' + char).classList.remove('pressed');
    }, 150);
}