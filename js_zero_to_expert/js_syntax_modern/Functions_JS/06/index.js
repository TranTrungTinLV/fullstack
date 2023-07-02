const lufthansa = {
    airLine: 'Lufthansa',
    ilaCode: 'LH',
    booking: [],
    book: function (flightNum, name) {
        console.log(`${name} booking seat on ${this.airLine} flight ${this.ilaCode} ${flightNum}`);
        this.booking.push({
            flights: `${this.ilaCode}${flightNum}`,
            name
        })
    }
}

const eruwings = {
    airLine: 'Eruwings',
    ilaCode: 'EW',
    booking: [],
}

let books = lufthansa.book;
// Using .call()
books.call(eruwings,123, 'John');
console.log(eruwings)
// Using .apply()
const flightData = [123, 'John'];
books.apply(eruwings, flightData);
console.log(eruwings)
books.call(eruwings, ...flightData);

// Using .bind()
const bookEruwings = lufthansa.book.bind(eruwings);
bookEruwings(123, 'John');