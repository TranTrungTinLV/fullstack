'use strict'

const lufthansa = {
    airLine: 'Lufthansa',
    ilaCode: 'LH',

    bookings: [],
    book: function (flightNum, name) {
        console.log(`${name} booking seat on ${this.airLine} flight ${this.ilaCode} ${flightNum}`);
        this.bookings.push({ //
            flights: `${this.ilaCode}${flightNum}`,
            name
        })

    },

    booking: [],
    book: function (flightNum, name) {
        console.log(`${name} booking seat on ${this.airLine} flight ${this.ilaCode} ${flightNum}`);
        this.booking.push({
            flights: `${this.ilaCode}${flightNum}`,
            name
        })
    },


}
console.log(lufthansa)
lufthansa.book('Levi', 1945678910);

lufthansa.book('Levi', 639);


//Call Method

const eruwings = {
    airLine: 'Lufthansa',
    ilaCode: 'LH',
    bookings: [], //
}

const books = lufthansa.book; //

books.call(eruwings, 23, 'Levi');
console.log(eruwings);
//Example call
const swiss = {
    airLine: 'lufthansa',
    ilaCode: 'LH',
    booking: []
}
books.call(swiss, 69, 'Squid John');
console.log(swiss);

//Apply Method
const flightData = [73, 'John'];
books.apply(swiss, flightData);
console.log(swiss);
books.call(swiss, ...flightData);
// console.log(swiss);
