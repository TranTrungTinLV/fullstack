//Map
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]; //
const ToEuro = 1.1;
// const USD = movements.map(
//     (movement) => movement + ToEuro
// )
// console.log(USD)

const arrUSD = []
for (const movement of movements) {
    console.log(movement);
    const USD = ToEuro * movement;
    arrUSD.push(USD)
}
console.log(arrUSD)


//FILLTER

const fillmove = movements.filter(
    mov => mov > 0
)
console.log(fillmove)

//REDUCE

const belance = movements.reduce(
    function (acc, cur, i, arr) { return acc + cur }, 0
)
console.log(belance)

//PIPELINE
const totalDepositUSD = movements.filter(mov => mov > 0).map(mov => mov * ToEuro).reduce((acc, mov) => acc + mov, 0)
console.log(totalDepositUSD)