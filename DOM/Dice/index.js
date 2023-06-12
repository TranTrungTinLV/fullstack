var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
console.log(typeof (randomNumber1))
var randomDice = "dice" + randomNumber1 + ".png"; //string + number = string dice.png
var pathImages = "./images/" + randomDice; // ./images/dice.png
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", pathImages);
console.log(randomDice);

var randomNumber2 = Math.floor(Math.random() * 6) + 1; //1-6
console.log(typeof (randomNumber2))
var randomDice = "dice" + randomNumber2 + ".png";
var pathImages2 = "./images/" + randomDice; // ./images/dice.png
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", pathImages2);
console.log(randomDice);

if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player Win";
} else if (randomNumber2 == randomNumber1) {
    document.querySelector("h1").innerHTML = "equaled";
} else {
    document.querySelector("h1").innerHTML = "Player failed";
}