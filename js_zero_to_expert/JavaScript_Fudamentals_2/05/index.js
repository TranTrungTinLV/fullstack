//Call func other func
function cutFruitPice(fruit) {
    return fruit * 4;
}
function fruitProcessor(apple, orange) {
    const appleFruitPice = cutFruitPice(apple);
    const orangeFruitPice = cutFruitPice(orange);
    const juice = `Juice with ${appleFruitPice} and ${orangeFruitPice}`;
    return juice;
}

console.log(fruitProcessor(2, 3))