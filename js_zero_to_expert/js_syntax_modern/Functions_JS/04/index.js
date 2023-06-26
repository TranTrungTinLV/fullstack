'use strict'

//Function Return
const greet = (greeting) => {
    return (name) => {
        console.log(`${greeting} ${name}`)
    }
}

const createrHey = greet('Hey');
createrHey('Tin')