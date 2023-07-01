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
}
console.log(lufthansa)
lufthansa.book('Levi', 1945678910);
lufthansa.book('Levi', 639);
const eruwings = {
    airLine: 'Lufthansa',
    ilaCode: 'LH',
    bookings: [], //
}

const books = lufthansa.book;

books.call(eruwings, 23, 'Levi'); //Phương thức này `call()` được sử dụng trên `books` hàm để gọi nó với this giá trị được đặt cho `eruwings` obj và với các `đối số(arguments)`: `23` và 'Levi'.
console.log(eruwings); //bookings được đổ vào từ bookings của lufthansa
console.log(eruwings.bookings)
//call(),apply() and bind()