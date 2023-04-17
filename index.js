
function handleClick() {
    var letter = this.innerHTML;
    
    createSound(letter);
    buttonAnimation(letter);
}

var buttons = document.querySelectorAll("button");

for (let index = 0; index < buttons.length; index++) {
    buttons[index].addEventListener("click", handleClick);
}

document.addEventListener("keydown", function (event) {
    createSound(event.key);
    buttonAnimation(event.key);
})

function createSound(key) {
    switch (key) {
        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            var bass = new Audio("sounds/kick-bass.mp3");
            bass.play();
            break;
        case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "d":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "j":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "k":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        //Piano
        case "z":
            var piano1 = new Audio("sounds/key01.mp3");
            piano1.play();
            break;
        case "x":
            var piano2 = new Audio("sounds/key04.mp3");
            piano2.play();
            break;
        case "c":
            var piano3 = new Audio("sounds/key08.mp3");
            piano3.play();
            break;
        case "v":
            var piano4 = new Audio("sounds/key12.mp3");
            piano4.play();
            break;
        case "b":
            var piano5 = new Audio("sounds/key16.mp3");
            piano5.play();
            break;
        case "n":
            var piano6 = new Audio("sounds/key20.mp3");
            piano6.play();
            break;
        case "m":
            var piano7 = new Audio("sounds/key24.mp3");
            piano7.play();
            break;
        default:
            console.log(key);
            break;
    }
}

function buttonAnimation(key) {
    var currentBtn = document.querySelector(`.${key}`);
    currentBtn.classList.add("pressed");

    setTimeout(() => {
        currentBtn.classList.remove("pressed");
    }, 100);
}