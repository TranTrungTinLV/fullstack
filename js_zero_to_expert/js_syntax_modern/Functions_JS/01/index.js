'use strict'
//Default Parameters(Tham số mặc định)
const bookings = []
//ES6 , params default
const creatingBook = function (fightNum, numPassengers = 11, price = 199) {
    //ES5
    // numPassengers ||= 11; //numPassengers là giá trị undefined nên lấy 11 
    // price ||= 199;//price là giá trị undefined nên lấy 199

    //ES6
    const booking = {
        fightNum,
        numPassengers,
        price
    }
    console.log(booking);
    bookings.push(booking);
}

creatingBook('L!H7');
creatingBook('LH9', 2, 399)
