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

//FindIndex(tìm theo mục)
//includes(kiểm tra xem phần tử đó có tồn tại trong mảng không)
//Flat và FlatMap(tách mảng lồng nhau)

const arrlevel1 = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arrlevel1.flat()); //[1,2,3,4,5,6,7,8]

const arrlevel2 = [[[1, 2], 3], [4, [5, 6]], 7, 8]
console.log(arrlevel2.flat(2)); //[1,2,3,4,5,6,7,8]


