var number0DrumButton = document.querySelectorAll("button")

for (var i = 0; i < number0DrumButton.length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function (e) {
        var buttoninerHTML = this.innerHTML;
        makeSound(buttoninerHTML);
        buttonAnimation(buttoninerHTML);
    })
}

document.addEventListener("keydown", function (e) {
    makeSound(e.key);
    buttonAnimation(e.key);
})

//Detecting keyboard keydown
function makeSound(key) {
    switch (key) {
        case "w":
            var audio = new Audio('./sounds/kick-bass.mp3');
            audio.play();
            break;
        case "a":
            var audio = new Audio('./sounds/snare.mp3');
            audio.play();
            break;
        case "s":
            var audio = new Audio('./sounds/crash.mp3');
            audio.play();
            break;
        case "d":
            var audio = new Audio('./sounds/tom-1.mp3');
            audio.play();
            break;
        case "l":
            var audio = new Audio('./sounds/tom-2.mp3');
            audio.play();
            break;
        case "k":
            var audio = new Audio('./sounds/tom-3.mp3');
            audio.play();
            break;
        case "j":
            var audio = new Audio('./sounds/tom-4.mp3');
            audio.play();
            break;
        default:
            break;
    }
}

document.addEventListener("keypress", function (e) {
    console.log(e);
})

function buttonAnimation(currentKey) {
    var activation = document.querySelector("." + currentKey);
    activation.classList.add("pressed");
    setTimeout(function(){
        activation.classList.remove("pressed")
    },100)
}