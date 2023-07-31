'use strict'
//SETTIMEOUT
// const time = setTimeout((img1, img2) => {
//     console.log(`Hello 3000 ${img1} ${img2}`)
// }, 3000, 'oliu', 'chivas') // 3s show Hello 3000

// console.log(`Waiting for ${time}`)

//excersices
const ingradients = ['oliu', 'snapsh'];
const pizzaTimer = setTimeout((ig1, ig2) => {
    console.log(`Hello 3000 ${ig1} ${ig2}`)
}, 3000, ...ingradients); // ingradients tách chuỗi
console.log('Waiting...')

if (ingradients.includes('bina')) {
    clearTimeout(pizzaTimer);
}

//SETINTERNAL
setInterval(() => {
    const now = new Date();
    console.log(now)
},1000)