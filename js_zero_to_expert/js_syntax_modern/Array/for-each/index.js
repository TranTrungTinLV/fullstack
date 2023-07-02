'use strict';

const moments = [200, 450, -200, 300, 400, 500, 800, 1000, -1]

for (const moment of moments) {
    if (moment > 0) {
        console.log(`You deposite ${moment}`)
    } else {
        console.log(`You withdrew ${Math.abs(moment)}`)
    }
}


console.log('--------FOR EACH-------------')
moments.forEach((moment, index) => {
    if (moment > 0) {
        console.log(`You deposite ${index + 1} ${moment}`)
    } else {
        console.log(`You withdrew ${Math.abs(moment)}`)
    }
})