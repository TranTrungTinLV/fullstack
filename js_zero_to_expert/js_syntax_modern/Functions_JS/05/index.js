'use strict'

const lufthansa = {
    airLine: 'Lufthansa',
    ilaCode: 'LH',
    booking: [],
    book: function (name, flightNum) {
        console.log(`${name} booking seat on ${this.airLine} flight ${this.ilaCode} ${flightNum}`);

    }
}

lufthansa.book('Levi', 1945678910);

const eruwings = {
    airLine: 'Lufthansa',
    ilaCode: 'LH',
    booking: [],
}

const books = lufthansa.book;

books.call(eruwings,23,'Levi');