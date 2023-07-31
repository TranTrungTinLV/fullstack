'use strict';
const button = document.querySelectorAll('.btn');

let buttonColor = ["green", "red", "yellow", "blue"];

let userClick = [];

let gamePass = [];

let level = 0;
let start = false;

document.addEventListener('keydown', function (e) {
    if (!start) {
        nextSound();
        start = true;
    }
});

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', function (e) {
        e.preventDefault();
        let userChosenColor = this.id;
        userClick.push(userChosenColor);
        PlaySound(userChosenColor);
        AnimatedCurrent(userChosenColor);
        checkAnswer(userClick.length - 1);
    });
}

function PlaySound(name) {
    var audio = new Audio("sound/" + name + ".mp3");
    audio.play();
}

function checkAnswer(currentLevel) {
    if (gamePass[currentLevel] === userClick[currentLevel]) {
        if (userClick.length === gamePass.length) {
            setTimeout(function () {
                nextSound();
            }, 1000);
        }
    } else {
        PlaySound("wrong");
        document.body.classList.add("game-over");
        document.querySelector('.container').style.opacity = 0;
        document.querySelector('h1').style.opacity = 0;
        document.getElementById('level-title').textContent = 'Game Over, Please try again!';
        setTimeout(function () {
            document.body.classList.remove("game-over");
            document.querySelector('.container').style.opacity = 1;
            document.querySelector('h1').style.opacity = 1;
            showStartPopup(); // Show the popup after Game Over
        }, 3000);

        startOver();
    }
}

function nextSound() {
    userClick = [];
    level++;
    document.getElementById('level-title').textContent = "Level " + level;
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChoosenNumber = buttonColor[randomNumber];
    gamePass.push(randomChoosenNumber);
    document.getElementById(randomChoosenNumber).classList.add('pressed');
    setTimeout(function () {
        document.getElementById(randomChoosenNumber).classList.remove('pressed');
    }, 1000);
    PlaySound(randomChoosenNumber);
}

function AnimatedCurrent(current) {
    document.getElementById(current).classList.add('pressed');

    setTimeout(function () {
        document.getElementById(current).classList.remove('pressed');
    }, 100);
}

function startOver() {
    level = 0;
    gamePass = [];
    start = false;
}

// Function to show the start popup
function showStartPopup() {
    document.querySelector('.popup').style.display = 'block';
}

// Function to hide the start popup and start level 1
function hideStartPopup() {
    document.querySelector('.popup').style.display = 'none';
    level = 1;
    document.getElementById('level-title').textContent = "Level " + level;
    nextSound();
}

// Add an event listener to the "Start" button in the popup
document.getElementById('startButton').addEventListener('click', function () {
    hideStartPopup(); // Hide the popup and start level 1
});

// Add an event listener to the document to show the popup when the page loads
document.addEventListener('DOMContentLoaded', function () {
    if (window.innerWidth <= 768) {
        document.querySelector('h1').textContent = ' ';
        showStartPopup();
    }
});
