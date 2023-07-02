'use strict'
//Working with String
const airline = "TAP Air Portugal";
const plane = "A320";
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log(plane[3]);

console.log('B373'[0])
console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));
console.log(airline.slice(0,3));

console.log(airline.slice(0,airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ')));

console.log(airline.slice(-2));
console.log(airline.slice(1,-1));

const middleSeat = function(seat){
    const s = seat.slice(1,3);
    if(s === 'B' || s === 'BE'){
        console.log('You middle Seat')
        console.log(s)
    }else{
        console.log('You got lucky')
        console.log(s)
    }
}

middleSeat('11E')
middleSeat('3CA')
middleSeat('1BE')

