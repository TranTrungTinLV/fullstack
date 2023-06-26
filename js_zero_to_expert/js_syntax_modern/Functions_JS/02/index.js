'use strict'
//Passing Agrument Work: Value vs Preferreince
const flight = 'LH370';

const jonas = {
    name: 'Jonas',
    passport: 29739479284,
}

function checkIn(flightNum, passenger) {
    flightNum = 'LH570',
        passenger.name = 'Mr. ' + passenger.name
    if (passenger.passport === 29739479284) {
        alert('checkIn');
    } else {
        console.log('Wrong not find');
    }
}

checkIn(flight, jonas);
console.log(flight, jonas);

function newPassPort(person) {
    person.passport = Math.trunc(Math.random() * 10000000000);
    console.log(person)
}

newPassPort(jonas)
