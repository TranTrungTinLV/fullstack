"use strict";

// console.log(document.querySelector('.message').textContent)
// document.querySelector('.message').textContent = 'Correct Number'
// document.querySelector('.number').textContent = '13'
// document.querySelector('.score').textContent = '10'
// document.querySelector('.guess').value = '23'


//creating random number
let number = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
// document.querySelector('.number').textContent = number
//AddEventListener


document.querySelector('.check').addEventListener('click', function () {

    const guess = Number(document.querySelector('.guess').value);
    if (!guess) {
        const message = document.querySelector('.message').textContent = "No number";
        message.classList.add('red-text');
        // document.querySelector('body').style.opacity = "0.1";

        document.querySelector('body').classList.add('haha');
        document.querySelector('header').classList.remove('h1');

    }
    //when guess win
    else if (guess === number) {
        document.querySelector('.message').textContent = "Correct number";
        document.querySelector('.number').textContent = number;
        document.querySelector('body').style.backgroundColor = '#60b347';
        if (score > highScore) {
            highScore = score;
            document.querySelector('.hightscore').textContent = highScore;

        }
    } else if (guess > number) {
        if (score > 0) {
            document.querySelector('.message').textContent = "Too hight";
            // document.querySelector('.number').textContent = number;
            score--
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = "You Lost"

        }
    } else if (guess < number) {
        if (score > 0) {
            document.querySelector('.message').textContent = "Too low";
            // document.querySelector('.number').textContent = number;

            score--
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = "You Lost"

        }
    }
})

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    document.querySelector.
    number = Math.floor(Math.random() * 20) + 1;
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#333';
    document.querySelector('.guess').value = '';
    document.querySelector('body').classList.remove('haha');
})